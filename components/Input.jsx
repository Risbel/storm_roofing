const Input = ({ className, ...props }) => {
  return (
    <input
      className={`bg-white text-lg md:text-2xl text-[#707070] font-light py-1 md:py-4 px-4 rounded-3xl md:rounded-2xl shadow-lg outline-none ${className}`}
      {...props}
    />
  );
};

export default Input;
