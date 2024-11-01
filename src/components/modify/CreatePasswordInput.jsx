import { useState } from 'react';
import CreateInput from '../create/CreateInput';

const CreatePasswordInput = () => {
  const [pwd, setPwd] = useState('');

  return (
    <div className="">
      <CreateInput
        label="비밀번호"
        name="password"
        value={pwd}
        placeholder="비밀번호를 입력해주세요."
        onChange={(e) => setPwd(e.target.value)}
        type="password"
      />
    </div>
  );
};

export default CreatePasswordInput;
