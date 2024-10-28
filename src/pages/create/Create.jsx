import React from "react";
import CreateForm from "./CreateForm";
import CreateItemForm from "./CreateItemForm";
import AddButton from "./AddButton";
import CreateButton from "./CreateButton";

function Create() {
  return (
    <div>
      <form>
        Head Components
        <CreateForm />
        <h3>대표 상품</h3>
        {/* h3 대신 SectionTitle로? */}
        <AddButton />
        <CreateItemForm />
        <CreateItemForm />
        <h3>내 쇼핑몰</h3>
        <AddButton />
        <CreateItemForm />
      </form>
      <CreateButton />
    </div>
  );
}

export default Create;
