function CreateForm({ id, label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CreateForm;
