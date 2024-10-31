import { useEffect, useState } from 'react';
import { heartEmpty, heartFill } from '../../images/icons';

const LikeButton = ({ initialLikes, onLikeChange }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [countLikes, setCountLikes] = useState(initialLikes);

  useEffect(() => {
    setCountLikes(initialLikes);
  }, [initialLikes]);

  const handleLikeChange = () => {
    setIsLiked((prev) => !prev);
    const newCount = !isLiked ? countLikes + 1 : countLikes - 1;
    setCountLikes(newCount);
    onLikeChange(newCount, !isLiked);
  };

  return (
    <div>
      <img
        src={isLiked ? heartFill : heartEmpty}
        alt="likes"
        onClick={handleLikeChange}
      />
    </div>
  );
};

export default LikeButton;
