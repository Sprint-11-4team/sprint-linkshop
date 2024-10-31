import { useState } from 'react';
import passwordToggleButton from '../../images/icons/password-toggle-off.png';
import './CreatePasswordButton.css';

const CreatePasswordButton = ({ value, onChange }) => {
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);

  const [passwordMessage, setPasswordMessage] = useState('');

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const userPasswordRegExp = /^[A-Za-z0-9]{6,}$/;

    if (!userPasswordRegExp.test(currentPassword)) {
      setPasswordMessage('영문을 포함한 숫자 6자 이상을 입력해주세요.');
      setIsPassword(false);
    } else {
      setPasswordMessage('');
      setIsPassword(true);
    }
  };

  return (
    <>
      <div className="password-input-wrapper">
        <label>
          비밀번호
          <input
            className="password-input"
            name="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="영문+숫자 6자 이상을 입력해주세요."
            required
          ></input>
        </label>
        <button className="password-toggle-button">
          <img src={passwordToggleButton} alt="비밀번호 숨김 상태 아이콘" />
        </button>
      </div>
      <p className="password-message">{passwordMessage}</p>
    </>
  );
};

export default CreatePasswordButton;
