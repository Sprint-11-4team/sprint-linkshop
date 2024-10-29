import './CreateInput.css';

const CreateInput = ({ label, name, value, onChange, placeholder }) => {
  return (
    <div>
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
    </div>
  );
};

export default CreateInput;
