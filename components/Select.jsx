const Select = ({ children, ...props }) => {
  return (
    <select
      className="py-2.5 md:py-4.5 pl-5 pr-10 rounded-3xl md:rounded-2xl shadow-lg text-md md:text-xl text-[#707070] outline-none font-light"
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
