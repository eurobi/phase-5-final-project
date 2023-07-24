import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Admin from './components/Admin';

function App() {

  const [ambassador, setAmbassador] = useState('')
  const [admin, setAdmin] = useState('')
  useEffect(()=>{
    fetch('/auth')
    .then(resp => {
      if(resp.ok){
        resp.json()
        .then(ambassador => setAmbassador(ambassador))
      }
    })
  },[])

  useEffect(()=>{
    fetch('/admin/auth')
    .then(resp => {
      if(resp.ok){
        resp.json()
        .then(admin => setAdmin(admin))
      }
    })
  },[])

  return (
    <div className="App">
      <Navbar admin={admin} setAdmin={setAdmin} ambassador={ambassador} setAmbassador={setAmbassador}></Navbar>
      <Routes>
        <Route path='/' element={<Home ambassador={ambassador} setAmbassador={setAmbassador}></Home>}></Route>
        <Route path='/ambassadors/:id' element={<Home ambassador={ambassador}></Home>}></Route>
        <Route path='/admin' element={<Admin admin={admin} setAdmin={setAdmin}></Admin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
