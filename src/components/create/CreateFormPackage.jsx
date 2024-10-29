import { useState } from "react";
import CreateForm from "./CreateForm";

function CreateFormPackage() {
  const [itemImg, setItemImg] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <CreateForm
        id="itmeImg"
        label="상품 대표 이미지"
        name="itmeImg"
        value={itemImg}
        placeholder="상품 이미지를 첨부해주세요."
        onChange={(e) => setItemImg(e.target.value)}
      />
      <CreateForm
        id="itemName"
        label="상품 이름"
        name="itemName"
        value={itemName}
        placeholder="상품 이름을 입력해 주세요."
        onChange={(e) => setItemName(e.target.value)}
      />
      <CreateForm
        id="price"
        label="상품 가격"
        name="price"
        value={price}
        placeholder="원화로 표기해 주세요."
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  );
}

export default CreateFormPackage;
