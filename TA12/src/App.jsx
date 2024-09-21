import { UserProvider } from './components/UserContext';
import UserInfo from './components/UserInfo';

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>Aplicación con Contexto de Usuario</h1>
        <UserInfo />
      </div>
    </UserProvider>
  );
};

export default App;
