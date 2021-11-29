import "./Input.scss";

const Input = ({
  name,
  className,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
  setErrors,
  label,
  id,
}) => {
  if (type === "checkbox")
    return (
      <div className={className ? className : ""}>
        <div className="checkbox-container">
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
            onFocus={() => setErrors((prev) => ({ ...prev, [name]: null }))}
          />
          <label htmlFor={id}>{label}</label>
          {errorMessage && <span className="error-msg">{errorMessage}</span>}
        </div>
      </div>
    );
  return (
    <div className={className ? className : ""}>
      <div className="input-container">
        <input
          name={name}
          type={type || "text"}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={errorMessage ? "invalid" : ""}
          onFocus={() => setErrors((prev) => ({ ...prev, [name]: null }))}
        />
        <span className="label">{placeholder}</span>
        {errorMessage && <span className="error-msg">{errorMessage}</span>}
      </div>
    </div>
  );
};

export default Input;
