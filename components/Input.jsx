const Input = ({ ...props }) => {
  return (
    <input
      className="text-lg md:text-xl text-[#707070] font-light py-1 md:py-4 px-4 rounded-3xl md:rounded-2xl shadow-lg outline-none"
      {...props}
    />
  );
};

export default Input;
