import './CreateButton.css';

const ModifyButton = ({ type, addClass }) => {
  return (
    <div>
      <button
        type={type}
        className={`create-button ${addClass ? 'active' : ''}`}
      >
        수정하기
      </button>
    </div>
  );
};

export default ModifyButton;
