const teamId = '10-4';
const linkShopId = 54;

async function updateLinkShop(teamId, linkShopId, updatedData) {
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

export default updateLinkShop;
