import './CreateInput.css';

const CreateInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  message,
}) => {
  return (
    <>
      <label className="create-label">
        {label}
        <input
          className="create-input"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      </label>
      <p className="message">{message}</p>
    </>
  );
};

export default CreateInput;
