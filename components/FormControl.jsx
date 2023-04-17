const FormControl = ({ children, className, ...props }) => {
  return (
    <div className={`my-3 flex flex-col space-y-1 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default FormControl;
