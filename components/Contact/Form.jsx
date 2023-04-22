import { useState } from "react";
import toast from "react-hot-toast";

import Label from "../Label";
import Input from "../Input";
import FormControl from "../FormControl";
import Select from "../Select";
import Textarea from "../Textarea";

const Form = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      const formData = new FormData(e.target);

      const data = {
        name: formData.get("name"),
        service: formData.get("service"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      await fetch("/api/send-email", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      toast.success("Email sent successfully", { duration: 4000 });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className={`w-full max-w-[400px] md:max-w-[700px] px-8 py-4 md:px-12 md:py-6 rounded-[30px] bg-[#b3d1e2] bg-opacity-20 backdrop-blur-sm ${className}`}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:items-end gap-6">
          <FormControl className="w-full">
            <Label htmlFor="name">Name</Label>
            <Input name="name" required />
          </FormControl>
          <FormControl>
            <Select name="service" defaultValue="" required>
              <option value="" disabled>
                Select Service
              </option>
              <option value="A">Service A</option>
              <option value="B">Service B</option>
              <option value="C">Service C</option>
            </Select>
          </FormControl>
        </div>
        <FormControl>
          <Label htmlFor="email">Email</Label>
          <Input className="max-w-[460px]" name="email" type="email" required />
        </FormControl>
        <FormControl>
          <Label htmlFor="message">Message</Label>
          <Textarea name="message" required />
        </FormControl>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-white text-md md:text-xl text-[#23232d] font-light px-12 py-2 rounded-3xl shadow-lg outline-none"
          type="submit"
          disabled={isLoading}
        >
          {!isLoading ? "Send" : "..."}
        </button>
      </div>
    </form>
  );
};

export default Form;
