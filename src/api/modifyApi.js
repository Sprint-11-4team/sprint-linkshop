const teamId = '10-4';
const linkShopId = 54;

// modify 조회 api

export async function updateLinkShop(teamId, linkShopId, updatedData) {
  const url = `https://linkshop-api.vercel.app/${teamId}/linkshops/${linkShopId}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) {
    throw new Error('수정하는 데 실패했습니다.');
  }

  const data = await res.json();
  return data;
}

// modify 조회 api

export async function lookupLinkShop(teamId, linkShopId) {
  const url = `https://linkshop-api.vercel.app/${teamId}/linkshops/${linkShopId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `리소스를 조회하는 데 실패했습니다. 상태 코드: ${response.status}`,
      );
    }

    const data = await response.json();
    const result = { name: data.name, id: data.id };
    console.log('조회 성공:', result);
    return result;
  } catch (error) {
    console.error('조회 실패:', error);
    throw error;
  }
}
