import './App.css';
import Main from './components/rates/Main';
import Toolbar from './components/Toolbar';
import { UserProvider } from './contexts/UserProvider';

function App() {
  return (
    <UserProvider> 
    <Toolbar />
    <Main />
  </UserProvider>
  );
}

export default App;