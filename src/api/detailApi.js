const BASE_URL = 'https://linkshop-api.vercel.app';

// 링크샵 상세 조회
export const fetchDetailData = async ({ teamId = '', linkShopId = '' }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${teamId}/linkshops/${linkShopId}`,
    );
    if (!response.ok) {
      throw new Error('네트워크가 응답하지 않습니다.');
    }
    const shopdata = await response.json();
    console.log(shopdata); // 데이터확인
    return shopdata;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 링크샵에 좋아요 추가
export const fetchLike = async ({ teamId = '', linkShopId = '' }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${teamId}/linkshops/${linkShopId}/like`,
      {
        method: 'POST',
      },
    );
    if (!response.ok) {
      throw new Error('네트워크가 응답하지 않습니다.');
    }
    const data = await response.json();
    console.log(data); // 데이터확인
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 링크샵에 좋아오 해제
export const fetchDeleteLike = async ({ teamId = '', linkShopId = '' }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${teamId}/linkshops/${linkShopId}/like`,
      {
        method: 'DELETE',
      },
    );
    if (!response.ok) {
      throw new Error('네트워크가 응답하지 않습니다.');
    }
    const data = await response.json();
    console.log(data); // 데이터확인
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 삭제 api
export const fetchDelete = async ({ teamId = '', linkShopId = '' }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${teamId}/linkshops/${linkShopId}`,
      {
        method: 'DELETE',
      },
    );
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 400) {
        return { error: data.message };
      }
    }
    console.log(data); // 데이터확인
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
