import CardList from './CardList';
import NotFoundResults from '../../components/home/NotFoundResults';

const ShopList = ({ visibleShops }) => {
  return (
    <div>
      {visibleShops.length > 0 ? (
        <CardList shops={visibleShops} />
      ) : (
        <NotFoundResults />
      )}
    </div>
  );
};

export default ShopList;
