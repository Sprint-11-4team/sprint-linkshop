import React from 'react';

const UserInfoForm = () => {
  return (
    <div className="userInfoForm">
      <input type="text" placeholder="표시하고 싶은 이름을 적어 주세요." />
      <input type="text" placeholder="아이디를 입력해주세요." />
      <button>중복확인</button>
      <input type="password" placeholder="8자 이상을 입력해주세요" />
      {/* 비밀번호 표시 버튼 토글 코드 */}
    </div>
  );
};

export default UserInfoForm;
