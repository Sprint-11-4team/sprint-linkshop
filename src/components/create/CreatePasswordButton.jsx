import { useState } from 'react';
import passwordToggleButtonOff from '../../images/icons/password-toggle-off.png';
import passwordToggleButtonOn from '../../images/icons/password-toggle-on.png';
import './CreatePasswordButton.css';

const CreatePasswordButton = ({ value, onChange, name }) => {
  const [showPassword, setShowPassword] = useState({
    type: 'password',
    visible: false,
  });

  const [passwordMessage, setPasswordMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);

  const showPasswordHandle = () => {
    setShowPassword((prevShowPassword) => ({
      type: prevShowPassword.visible ? 'password' : 'text',
      visible: !prevShowPassword.visible,
    }));
  };

  // 유효성 검사

  const handlePasswordValidation = (e) => {
    const userPasswordRegExp = /^[A-Za-z0-9]{6,}$/;
    setIsPassword(userPasswordRegExp.test(e.target.value));
    onChange(e); // Create에서 상태 관리할 수 있도록 호출
  };

  const handleBlur = (e) => {
    setPasswordMessage(
      isPassword ? '' : '영문을 포함한 숫자 6자 이상을 입력해주세요.',
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
