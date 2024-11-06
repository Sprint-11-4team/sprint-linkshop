const BASE_URL = 'https://linkshop-api.vercel.app/11-4/linkshops?';

export const fetchShopData = async ({ cursor, keyword, orderBy }) => {
  try {
    const params = new URLSearchParams();

    if (cursor) {
      params.append('cursor', cursor);
    }

    if (keyword) {
      params.append('keyword', encodeURIComponent(keyword));
    }

    if (orderBy) {
      params.append('orderBy', orderBy);
    }

    const response = await fetch(`${BASE_URL}${params.toString()}`);

    if (!response.ok) {
      throw new Error('네트워크가 응답하지 않습니다.');
    }

    const shopdata = await response.json();

    return {
      list: shopdata.list,
      nextCursor: shopdata.nextCursor,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
