import './CreateInput.css';

const CreateInput = ({ label, name, value, placeholder, onChange, onBlur }) => {
  return (
    <>
      <label className="create-label">
        {label}
        <input
          className="create-input"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required
        />
      </label>
    </>
  );
};

export default CreateInput;
