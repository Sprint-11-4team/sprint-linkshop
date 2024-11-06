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
  onValidityChange = () => {},
}) => {
  const [errorCheck, setErrorCheck] = useState(false);

  const handleValidation = (e) => {
    onChange(e);
  };

  const handleErrorMessage = (e) => {
    const inputValue = e.target.value;
    const isValid = validationRule
      ? typeof validationRule === 'function'
        ? validationRule(inputValue)
        : validationRule.test(inputValue)
      : inputValue.trim() !== '';

    setErrorCheck(isValid ? '' : errorMessage); // 에러가 있으면 errorMessage 설정
    onValidityChange(isValid); // 부모 컴포넌트로 유효성 결과 전달

    console.log('필드별 유효성 검사', isValid);
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
