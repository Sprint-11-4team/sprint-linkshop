const BASE_URL = 'https://linkshop-api.vercel.app/11-4/linkshops';

export const addLike = async (linkShopId) => {
  try {
    const response = await fetch(`${BASE_URL}/${linkShopId}/like`, {
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

export const removeLike = async (linkShopId) => {
  try {
    const response = await fetch(`${BASE_URL}/${linkShopId}/like`, {
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
