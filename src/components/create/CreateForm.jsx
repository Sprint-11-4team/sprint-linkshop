import './CreateForm.css';

function CreateForm({ id, label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="createLabel">
        {label}
        <input
          className="createInput"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

export default CreateForm;
