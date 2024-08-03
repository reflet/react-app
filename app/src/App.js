import { useContext } from 'react';
import { AdminFlagContext } from './components/providers/AdminFlagProvider';

import Card from './components/Card';

function App() {
  // 管理者フラグ (Context内のisAdminと更新関数)
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  // [切り替え] 押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      <span>{isAdmin ? '管理者です' : '管理者以外です'}</span>
      <button onClick={onClickSwitch}>切り替え</button>
      <Card />
    </div>
  );
}

export default App;
