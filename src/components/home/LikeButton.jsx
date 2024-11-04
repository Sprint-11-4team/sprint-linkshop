import { useEffect, useState } from 'react';
import { heartEmpty, heartFill } from '../../images/icons';
import { addLike, removeLike } from '../../api/likeApi';

const LikeButton = ({ initialLikes, onLikeChange, linkShopId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [countLikes, setCountLikes] = useState(initialLikes);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  useEffect(() => {
    setCountLikes(initialLikes);
  }, [initialLikes]);

  const handleLikeChange = async (e) => {
    e.stopPropagation();

    if (isLoading) return;
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <img
        src={isLiked ? heartFill : heartEmpty}
        alt="likes"
        onClick={handleLikeChange}
        style={{ cursor: isLoading ? 'not-allowed' : 'pointer' }}
      />
    </div>
  );
};

export default LikeButton;
