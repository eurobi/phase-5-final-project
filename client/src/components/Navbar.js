import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar({ambassador, setAmbassador}){

    function handleLogOut(){
        fetch('/logout',{
            method: 'DELETE'
        }).then(setAmbassador(null))
    }

    return(
        <div className='nav-bar'>
            <p>Welcome</p>
            {ambassador? <button onClick={handleLogOut}>Logout</button> : null}
        </div>
    )
}

export default Navbar