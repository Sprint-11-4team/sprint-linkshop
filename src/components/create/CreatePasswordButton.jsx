import { useState } from 'react';
import passwordToggleButtonOff from '../../images/icons/password-toggle-off.png';
import passwordToggleButtonOn from '../../images/icons/password-toggle-on.png';
import './CreatePasswordButton.css';

const CreatePasswordButton = ({ value, onChange, name, onValidityChange }) => {
  const [showPassword, setShowPassword] = useState({
    type: 'password',
    visible: false,
  });

  const [passwordMessage, setPasswordMessage] = useState('');

  const showPasswordHandle = () => {
    setShowPassword((prevShowPassword) => ({
      type: prevShowPassword.visible ? 'password' : 'text',
      visible: !prevShowPassword.visible,
    }));
  };

  const chkValidation = (value) => {
    const userPasswordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return userPasswordRegExp.test(value);
  };

  // 유효성 검사
  const handlePasswordValidation = (e) => {
    const validate = chkValidation(e.target.value);

    onValidityChange(validate, e.target.name); // 유효성검사
    onChange(e); // Create에서 상태 관리할 수 있도록 호출
  };

  const handleBlur = (e) => {
    setPasswordMessage(
      chkValidation(value) ? '' : '영문을 포함한 숫자 6자 이상을 입력해주세요.',
    );
  };

  return (
    <>
      <div
        className={`password-input-wrapper ${passwordMessage !== '' ? 'error' : ''}`}
      >
        <label>
          비밀번호
          <input
            className="password-input"
            name={name}
            type={showPassword.type}
            value={value}
            onChange={handlePasswordValidation}
            onBlur={handleBlur}
            placeholder="영문+숫자 6자 이상을 입력해주세요."
          ></input>
        </label>
        <button
          type="button"
          className="password-toggle-button"
          onClick={showPasswordHandle}
        >
          <img
            src={
              showPassword.visible
                ? passwordToggleButtonOn
                : passwordToggleButtonOff
            }
            alt="비밀번호 숨김 상태 아이콘"
          />
        </button>
      </div>
      <p className="password-message">{passwordMessage}</p>
    </>
  );
};

export default CreatePasswordButton;
