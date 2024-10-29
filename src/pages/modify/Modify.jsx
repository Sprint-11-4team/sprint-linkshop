import React from 'react';
import Header from '../../components/common/Header';
import MainProductList from './MainProductList';
import MyProductList from './MyProductList';
import UserInfoForm from './UserInfoForm';
import ModifyButton from './ModifyButton';

const Modify = () => {
  return (
    <div>
      {/* <Header>내 스토어</Header> */}
      <UserInfoForm />
      <MainProductList title="대표 상품" />
      <MyProductList title="내 쇼핑몰" />
      <ModifyButton />
    </div>
  );
};

export default Modify;
