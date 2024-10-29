const BASE_URL = 'https://linkshop-api.vercel.app';

export const fetchShopData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/10-4/linkshops`);
    if (!response.ok) {
      throw new Error('네트워크가 응답하지 않습니다.');
    }
    const shopdata = await response.json();
    return shopdata.list;
  } catch (error) {
    throw new Error(error.message);
  }
};
