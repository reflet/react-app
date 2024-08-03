import { useContext } from 'react';
import { AdminFlagContext } from './providers/AdminFlagProvider';

const style = {
  width: '100px',
  padding: '6px',
  borderRadius: '8px'
};

const EditButton = () => {
  const { isAdmin } = useContext(AdminFlagContext);

  // isAdminがfalse（管理者以外）の場合は、ボタンを非活性にする
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
}

export default EditButton;
