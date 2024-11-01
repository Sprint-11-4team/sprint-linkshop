import CreatePasswordInput from './CreatePasswordInput';
import CreateUrl from './CreateUrl';
import CreateProductList from '../../pages/modify/MyProductList';

const MyShopComponent = () => {
  return (
    <>
      <CreateProductList />
      <CreateUrl />
      <CreatePasswordInput />
    </>
  );
};

export default MyShopComponent;
