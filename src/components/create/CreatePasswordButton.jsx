import { useState } from 'react';
import passwordToggleButtonOff from '../../images/icons/password-toggle-off.png';
import passwordToggleButtonOn from '../../images/icons/password-toggle-on.png';
import './CreatePasswordButton.css';

const CreatePasswordButton = ({ onChange }) => {
  const [password, setPassword] = useState('');
<<<<<<< Updated upstream
  const [isPassword, setIsPassword] = useState(false);
=======
  const [showPassword, setShowPassword] = useState({
    type: 'password',
    visible: false,
  });
>>>>>>> Stashed changes

  const [isPassword, setIsPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');

  const showPasswordHandle = (e) => {
    setShowPassword(() => {
      if (!showPassword.visible) {
        return { type: 'text', visible: true };
      } else {
        return { type: 'password', visible: false };
      }
    });
  };

  // 유효성 검사

  const onChangePassword = (e) => {
    const passwordInput = e.target.value.trim();
    setPassword(passwordInput);
    const userPasswordRegExp = /^[A-Za-z0-9]{6,}$/;
    setIsPassword(userPasswordRegExp.test(passwordInput));
  };

  const handlePassword = () => {
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
            name="password"
            type={showPassword.type}
            value={password}
            onChange={onChangePassword}
            onBlur={handlePassword}
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
