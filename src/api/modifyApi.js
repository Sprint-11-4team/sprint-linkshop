const BASE_URL = 'https://linkshop-api.vercel.app';
const LINK_SHOP_ID = '56';

async function updateLinkShop(teamId, linkShopId, updatedData) {
  const url = `https://yourapi.com/${teamId}/linkshops/${linkShopId}`;
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
