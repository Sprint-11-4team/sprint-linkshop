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
      {/* <label
        className={`create-label ${value === '' ? '' : isUserId ? 'valid' : 'error'}`}
      ></label>
      <p className={isUserId ? 'validUserId' : 'errorUserId'}></p> */}
    </>
  );
};

export default CreateInput;
