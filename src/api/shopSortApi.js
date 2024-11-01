const BASE_URL = 'https://linkshop-api.vercel.app/11-4/linkshops';

export const fetchSortData = async (orderBy) => {
  try {
    const response = await fetch(`${BASE_URL}?orderBy=${orderBy}`);

    if (!response.ok) {
      throw new Error('실패');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
