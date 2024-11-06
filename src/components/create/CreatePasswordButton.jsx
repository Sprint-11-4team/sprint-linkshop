import { useState } from 'react';
import passwordToggleButtonOff from '../../images/icons/password-toggle-off.png';
import passwordToggleButtonOn from '../../images/icons/password-toggle-on.png';
import './CreatePasswordButton.css';

const CreatePasswordButton = ({
  value,
  onChange,
  name,
  validationRule,
  onValidityChange = () => {},
}) => {
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

  const handlePasswordValidation = (e) => {
    const inputValue = e.target.value;
    const isValidPassword = validationRule
      ? validationRule.test(inputValue)
      : true;

    setIsPassword(isValidPassword);

    onChange(e); // 부모 컴포넌트에 상태 업데이트
    onValidityChange(isValidPassword); // 유효성 검사 결과 전달
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
