import "./SelectInput.scss";

const SelectInput = ({
  name,
  className,
  placeholder,
  value,
  onChange,
  errorMessage,
  setErrors,
  options,
}) => {
  return (
    <div className={className ? className : ""}>
      <select
        className={`select-input ${errorMessage ? "invalid" : ""}`}
        onChange={onChange}
        name={name}
        onFocus={() => setErrors((prev) => ({ ...prev, [name]: null }))}
        value={value}
      >
        <option value="">{placeholder}</option>
        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
      {errorMessage && <span className="error-msg">{errorMessage}</span>}
    </div>
  );
};

export default SelectInput;
