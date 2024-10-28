import React, { useState } from "react";
import CreateForm from "../../components/create/CreateForm";
import CreateFormPackage from "../../components/create/CreateFormPackage";
import AddButton from "../../components/create/AddButton";
import CreateButton from "../../components/create/CreateButton";

function Create() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    id: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };

  const { name, id, password } = userInfo;

  return (
    <div>
      <form>
        Head Components
        <div>
          <CreateForm
            id="name"
            label="이름"
            name="name"
            value={name}
            placeholder="표시하고 싶은 이름을 적어 주세요."
            onChange={handleInputChange}
          />
          <CreateForm
            id="id"
            label="아이디"
            name="id"
            value={id}
            placeholder="아이디를 입력해주세요."
            onChange={handleInputChange}
          />
          <CreateForm
            id="password"
            label="비밀번호"
            name="password"
            value={password}
            placeholder="숫자 4자리를 입력해주세요."
            onChange={handleInputChange}
          />
          <h3>대표 상품</h3>
          {/* h3 대신 SectionTitle로? */}
          <AddButton />
          <CreateFormPackage />
          <CreateFormPackage />
          <h3>내 쇼핑몰</h3>
          <AddButton />
          <CreateFormPackage />
        </div>
      </form>
      <CreateButton />
    </div>
  );
}

export default Create;
