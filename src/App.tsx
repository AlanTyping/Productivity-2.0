import { Login } from './pages/Login';
import './App.css';
import { User } from './interface';

function App() {
  const createUser = (manolo: User): User => {
    return {
      name: 'si',
      id: 2
    }
  }
  console.log(createUser({name: "ronaldo", id: 2}));
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
