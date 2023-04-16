import Label from "../Label";
import Input from "../Input";
import FormControl from "../FormControl";
import Select from "../Select";
import Textarea from "../Textarea";

const Form = ({ className }) => {
  return (
    <form
      className={`w-full max-w-[400px] md:max-w-[700px] px-8 py-4 md:px-12 md:py-6 rounded-[30px] bg-[#b3d1e2] bg-opacity-20 backdrop-blur-sm ${className}`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <FormControl className="w-full">
            <Label>Name</Label>
            <Input required />
          </FormControl>
          <FormControl>
            <Select defaultValue="" required>
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
          <Label>Email</Label>
          <Input type="email" required />
        </FormControl>
        <FormControl>
          <Label>Message</Label>
          <Textarea required />
        </FormControl>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-white text-md md:text-xl text-[#23232d] font-light px-12 py-2 rounded-3xl shadow-lg outline-none"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
