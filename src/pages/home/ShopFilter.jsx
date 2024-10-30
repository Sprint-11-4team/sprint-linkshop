const ShopFilter = ({ shopList, searchShop, page, itemsPerPage }) => {
  const filteredShops = shopList.filter((shop) =>
    shop.name.toLowerCase().includes(searchShop.toLowerCase()),
  );

  return filteredShops.slice(0, page * itemsPerPage);
};

export default ShopFilter;
