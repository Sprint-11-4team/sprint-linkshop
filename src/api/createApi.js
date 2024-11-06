const BASE_URL = 'https://linkshop-api.vercel.app';

export async function createLinkShop(teamId, createData) {
  const url = `${BASE_URL}/${teamId}/linkshops`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createData),
    });

    if (!res.ok) {
      if (res.status === 400) {
        const errorData = await res.json();
        const errorMessage =
          errorData.details?.name?.message || '등록하는 데 실패했습니다.';
        throw new Error(errorMessage);
      }

      const errorData = await res.json();
      throw new Error(errorData.message || '등록하는 데 실패했습니다.');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error occurred:', error.message);
    throw error;
  }
}

// 파일첨부 api
export async function uploadImageApi(formData) {
  const url = `${BASE_URL}/images/upload`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('네트워크가 응답하지 않습니다.');
    }
    const data = await response.json();
    console.log(data); // 데이터확인
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
