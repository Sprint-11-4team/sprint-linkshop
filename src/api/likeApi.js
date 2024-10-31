const BASE_URL = 'https://linkshop-api.vercel.app/11-4/linkshops';

export const addLike = async (shopId) => {
  try {
    const response = await fetch(`${BASE_URL}/${shopId}/like`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: '',
    });

    if (!response.ok) {
      throw new Error('좋아요 추가 실패');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const removeLike = async (shopId) => {
  try {
    const response = await fetch(`${BASE_URL}/${shopId}/like`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('좋아요 취소 실패');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
