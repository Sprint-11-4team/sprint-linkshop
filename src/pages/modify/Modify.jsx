import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Header from '../../components/common/Header';
// import CreateInput from '../../components/create/CreateInput';
import AddButton from '../../components/create/AddButton';
// import CreatePasswordButton from '../../components/create/CreatePasswordButton';
import ModifyButton from '../../components/create/ModifyButton';
import CreateProductInput from '../../components/create/CreateProductInput';
import MyproductList from './MyProductList';

const Modify = () => {
  // const [userInfo, setUserInfo] = useState({
  //   name: '',
  //   userId: '',
  //   password: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserInfo((userInfo) => ({
  //     ...userInfo,
  //     [name]: value,
  //   }));
  // };

  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pwd = queryParams.get('pwd'); // pwd 값을 가져옵니다.
  console.log(id + ' 확인' + pwd);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/ ');
  };

  // const { name, userId, password } = userInfo;

  return (
    <div>
      <Header buttonName="내 스토어" onButtonClick={handleButtonClick} />
      <form className="form-body">
        <div>
          {/* <CreateInput
            label="이름"
            name="name"
            value={name}
            placeholder="표시하고 싶은 이름을 적어 주세요."
            onChange={handleInputChange}
          />
          <CreateInput
            label="아이디"
            name="userId"
            value={userId}
            placeholder="아이디를 입력해주세요."
            onChange={handleInputChange}
          />
          <div>
            <CreateInput
              className="passwordInput"
              label="비밀번호"
              name="password"
              value={password}
              placeholder="숫자 4자리를 입력해주세요."
              onChange={handleInputChange}
            />
            <CreatePasswordButton />
          </div> */}
          <h3 className="create-h3">
            대표 상품
            <AddButton />
            <CreateProductInput />
            <CreateProductInput />
          </h3>
          {/* h3 대신 SectionTitle로? */}
          <h3 className="create-h3">
            내 쇼핑몰
            <AddButton />
            <MyproductList />
          </h3>
          <ModifyButton />
        </div>
      </form>
    </div>
  );
};

export default Modify;
