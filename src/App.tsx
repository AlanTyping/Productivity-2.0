import { Login } from './pages/Login';
import './App.css';
import { User } from './interface';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const createUser = (manolo: User): User => {
    return {
      name: 'si',
      id: 2
    }
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
