import './AddButton.css';

const AddButton = ({ onClick }) => {
  return (
    <>
      <button className="add-button" onClick={onClick}>
        추가
      </button>
    </>
  );
};

export default AddButton;
