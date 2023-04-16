const Label = ({ children, ...props }) => {
  return (
    <label className="text-white text-md md:text-xl font-light" {...props}>
      {children}
    </label>
  );
};

export default Label;
