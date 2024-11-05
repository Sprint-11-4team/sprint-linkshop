import { useState } from 'react';
import './CreateButton.css';

const CreateButton = ({ onChange, disabled }) => {
  // eslint-disable-next-line
  const [isActive, setIsActive] = useState(false);

  const handleActiveButton = (e) => {
    onChange(e);
  };

  return (
    <div>
      <button
        className={`create-button ${isActive ? 'active' : 'disabled'}`}
        onChange={handleActiveButton}
        disabled={disabled}
      >
        생성하기
      </button>
    </div>
  );
};

export default CreateButton;
