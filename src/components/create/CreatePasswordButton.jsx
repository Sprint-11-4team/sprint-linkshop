import { useState } from 'react';
import passwordToggleButton from '../../images/icons/password-toggle-off.png';
import './CreatePasswordButton.css';

const CreatePasswordButton = ({ value, onBlur }) => {
  const [password, setPassword] = useState('');
  // eslint-disable-next-line
  const [isPassword, setIsPassword] = useState(false);

  const [passwordMessage, setPasswordMessage] = useState('');

  const onChangePassword = (e) => {
    const passwordInput = e.target.value; // 애초에 공백 없애는 trim() 쓰는 게 효율적인 거 아닌가
    setPassword(passwordInput);
    const userPasswordRegExp = /^[A-Za-z0-9]{6,}$/;
    setIsPassword(userPasswordRegExp.test(passwordInput));
  };

  const handlePassword = () => {
    setPasswordMessage(
      isPassword ? '' : '영문을 포함한 숫자 6자 이상을 입력해주세요.',
    );
  };

  // 입력 시 유효성 검사
  // const onChangeUserId = (e) => {
  //   const currentUserId = e.target.value;
  //   setUserId(currentUserId);

  //   const userIdRegExp = /^[A-Za-z0-9]{1,}$/;
  //   setIsUserId(
  //     !currentUserId === '' || !userIdRegExp.test(currentUserId) ? false : true,
  //   );
  // };

  // focust out 시 메시지 출력
  // const handleUserId = () => {
  //   setUserIdMessage(
  //     isUserId
  //       ? '사용할 수 있는 아이디입니다.'
  //       : '아이디에 띄어쓰기, 특수기호를 사용할 수 없습니다.',
  //   );
  // };

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
            type="password"
            value={password}
            onChange={onChangePassword}
            onBlur={handlePassword}
            placeholder="영문+숫자 6자 이상을 입력해주세요."
            required
          ></input>
        </label>
        <button className="password-toggle-button">
          <img src={passwordToggleButton} alt="비밀번호 숨김 상태 아이콘" />
        </button>
      </div>
      <p className="password-message">{passwordMessage}</p>
      {/* {isValidMessage && (
        <p className={isUserId ? 'validUserId' : 'errorUserId'}>
          {isValidMessage}
        </p> */}
    </>
  );
};

export default CreatePasswordButton;
