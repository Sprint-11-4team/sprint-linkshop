import { useEffect, useState } from "react";

function CreatehtmlForm() {
  const [data, setData] = useState();

  const handleChange = (e) => {
    setData(e.target.value);
    console.log(data);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <label htmlFor="name">이름</label>
      <input id="name" type="text" value={data} name="name" placeholder="표시하고 싶은 이름을 적어 주세요." onChange={handleChange} />
      <label htmlFor="id">아이디</label>
      <input id="id" type="text" value={data} name="id" placeholder="아이디를 입력해주세요." onChange={handleChange} />
      <label htmlFor="password">비밀번호</label>
      <input id="password" type="password" value={data} name="password" placeholder="숫자 4자리를 입력해주세요." onChange={handleChange} />
      {/* value에 들어갈 data 값을 다 따로 만들어줘야 하나? 아니면 배열 형태로 구성? */}
    </div>
  );
}

export default CreatehtmlForm;
