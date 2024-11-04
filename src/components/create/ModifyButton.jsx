import './CreateButton.css';

const ModifyButton = ({ type }) => {
  return (
    <div>
      <button type={type} className="create-button">
        수정하기
      </button>
    </div>
  );
};

export default ModifyButton;
