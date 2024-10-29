import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import SearchInput from '../../components/home/SearchInput';
import CardList from './CardList';

const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/create');
  };

  return (
    <>
      <Header buttonName="생성하기" onButtonClick={handleButtonClick} />
      <SearchInput />
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="/detail">detail - 임시링크</a>
        <br />
        <a href="/modify">modify - 임시링크</a>
        <div>
          <CardList />
        </div>
      </div>
    </>
  );
};

export default Home;
