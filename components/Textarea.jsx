const Textarea = ({ ...props }) => {
  return (
    <textarea
      className="text-md md:text-xl text-[#707070] font-light py-2 md:py-2 px-4 rounded-3xl shadow-lg outline-none"
      rows={4}
      {...props}
    ></textarea>
  );
};

export default Textarea;
