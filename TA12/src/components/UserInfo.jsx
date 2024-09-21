import { useContext } from 'react';
import { UserContext } from './UserContext';

const UserInfo = () => {
  const { userName, setUserName } = useContext(UserContext);

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <h2>Nombre de usuario: {userName}</h2>
      <input 
        type="text" 
        value={userName} 
        onChange={handleInputChange} 
        placeholder="Escribe tu nombre" 
      />
    </div>
  );
};

export default UserInfo;
