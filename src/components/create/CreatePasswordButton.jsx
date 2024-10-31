import passwordToggleButton from '../../images/icons/password-toggle-off.png';
import './CreatePasswordButton.css';

const CreatePasswordButton = ({ value, onChange }) => {
  return (
    <div className="password-input-wrapper">
      <label>
        비밀번호
        <input
          className="password-input"
          name="password"
          value={value}
          onChange={onChange}
          placeholder="영문+숫자 6자 이상을 입력해주세요."
        ></input>
      </label>
      <button className="password-toggle-button">
        <img src={passwordToggleButton} alt="비밀번호 숨김 상태 아이콘" />
      </button>
    </div>
  );
};

export default CreatePasswordButton;
