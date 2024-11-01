import { useEffect, useState } from 'react';
import { heartEmpty, heartFill } from '../../images/icons';
import { addLike, removeLike } from '../../api/likeApi';

const LikeButton = ({ initialLikes, onLikeChange, linkShopId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [countLikes, setCountLikes] = useState(initialLikes);

  useEffect(() => {
    setCountLikes(initialLikes);
  }, [initialLikes]);

  const handleLikeChange = async () => {
    try {
      if (isLiked) {
        await removeLike(linkShopId);
        setCountLikes((prev) => prev - 1);
      } else {
        await addLike(linkShopId);
        setCountLikes((prev) => prev + 1);
      }
      setIsLiked((prev) => !prev);
      onLikeChange(countLikes + (isLiked ? -1 : 1));
    } catch (error) {
      console.log(error);
    }
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
