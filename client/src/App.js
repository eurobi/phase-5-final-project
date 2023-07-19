import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function App() {

  const [ambassador, setAmbassador] = useState('')
  console.log(ambassador)
  useEffect(()=>{
    fetch('/auth')
    .then(resp => {
      if(resp.ok){
        resp.json()
        .then(ambassador => setAmbassador(ambassador))
      }
    })
  },[])

  return (
    <div className="App">
      <Navbar ambassador={ambassador} setAmbassador={setAmbassador}></Navbar>
      <Routes>
        <Route path='/' element={<Home ambassador={ambassador} setAmbassador={setAmbassador}></Home>}></Route>
        <Route path='/ambassadors/:id' element={<Home ambassador={ambassador}></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
