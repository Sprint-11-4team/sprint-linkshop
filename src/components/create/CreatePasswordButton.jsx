import passwordToggleButton from '../../images/icons/password-toggle-off.png';

const CreatePasswordButton = () => {
  return (
    <button>
      <img
        className="password-toggle-button"
        src={passwordToggleButton}
        alt="비밀번호 숨김 상태 아이콘"
      />
    </button>
  );
};

export default CreatePasswordButton;
