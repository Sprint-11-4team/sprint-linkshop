import { useEffect, useState } from "react";
import ".CreateItemForm.css";

function CreateItemhtmlForm() {
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
      <button>파일 첨부</button>
      <label htmlFor="item-img">상품 대표 이미지</label>
      <input id="item-img" type="file" value={data} name="item-img" placeholder="상품 이미지를 첨부해주세요." onChange={handleChange} accept="image/*" />
      <label htmlFor="item-name">상품 이름</label>
      <input id="item-name" type="text" value={data} name="item-name" placeholder="상품 이름을 입력해주세요." onChange={handleChange} />
      <label htmlFor="item-price">상품 가격</label>
      <input id="item-price" type="number" value={data} name="item-price" placeholder="원화로 표기해 주세요." onChange={handleChange} />
      {/* value에 들어갈 data 값을 다 따로 만들어줘야 하나? 아니면 배열 형태로 구성? */}
    </div>
  );
}

export default CreateItemhtmlForm;
