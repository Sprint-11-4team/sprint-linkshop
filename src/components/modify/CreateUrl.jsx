import { useState } from 'react';
import CreateInput from '../create/CreateInput';

const CreateUrl = () => {
  const [url, setUrl] = useState('');

  return (
    <div className="create-input-package">
      <CreateInput
        label="Url"
        name="Url"
        value={url}
        placeholder="Url을 입력해주세요."
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  );
};

export default CreateUrl;
