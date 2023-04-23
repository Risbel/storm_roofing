const Select = ({ children, className, ...props }) => {
  return (
    <select
      className={`bg-white py-2 md:py-4 pl-5 pr-10 rounded-3xl md:rounded-2xl shadow-lg text-md md:text-2xl text-[#707070] outline-none font-light ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
