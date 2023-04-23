const FormControl = ({ children, className, ...props }) => {
  return (
    <div className={`my-3 flex flex-col gap-1 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default FormControl;
