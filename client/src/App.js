import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/ambassadors/:id' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
