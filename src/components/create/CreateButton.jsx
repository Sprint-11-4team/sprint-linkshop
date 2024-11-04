import { useState } from 'react';
import './CreateButton.css';

const CreateButton = () => {
  // eslint-disable-next-line
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <button className={`create-button ${isActive ? 'active' : 'disabled'}`}>
        생성하기
      </button>
    </div>
  );
};

export default CreateButton;
