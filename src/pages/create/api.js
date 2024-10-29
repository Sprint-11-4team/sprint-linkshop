export async function getItems() {
  const response = await fetch("https://linkshop-api.vercel.app/{teamId}/linkshops");
  const body = response.json();
  return body;
}
