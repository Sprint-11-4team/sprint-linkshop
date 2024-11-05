import { useState } from 'react';
import './CreateInput.css';

const CreateInput = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  errorMessage,
  validationRule,
}) => {
  const [errorCheck, setErrorCheck] = useState(false);

  const handleValidation = (e) => {
    onChange(e);
  };

  const handleErrorMessage = (e) => {
    const inputValue = e.target.value;
    let isValid = true;

    // validationRule이 존재할 때 유효성 검사 실행
    if (validationRule) {
      if (typeof validationRule === 'function') {
        isValid = validationRule(inputValue);
      } else if (validationRule instanceof RegExp) {
        isValid = validationRule.test(inputValue);
      }
    }

    setErrorCheck(isValid ? '' : errorMessage); // 에러가 있으면 errorMessage 설정
  };

  return (
    <>
      <label className={`create-label ${errorCheck ? 'error' : ''}`}>
        {label}
        <input
          className={`create-input ${errorCheck ? 'error' : ''}`}
          name={name}
          value={value}
          onChange={handleValidation}
          onBlur={handleErrorMessage}
          placeholder={placeholder}
          required
        />
      </label>
      {errorCheck && <p className="error-message">{errorMessage}</p>}
    </>
  );
};

export default CreateInput;
