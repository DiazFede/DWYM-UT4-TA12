import  { useContext } from 'react';
import { UserContext } from './UserContext';

const UserInfo = () => {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <h2>Nombre de usuario: {userName}</h2>
    </div>
  );
};

export default UserInfo;
