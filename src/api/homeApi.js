const BASE_URL = 'https://linkshop-api.vercel.app';

export const fetchShopData = async ({ cursor, keyword }) => {
  try {
    const cursorQuery = cursor ? `?cursor=${cursor}` : '';
    const keywordQuery = keyword ? `&keyword=${keyword}` : '';

    const response = await fetch(
      `${BASE_URL}/11-4/linkshops?${cursorQuery}${keywordQuery}`,
    );

    console.log(response);
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
