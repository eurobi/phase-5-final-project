import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar({ambassador, setAmbassador, admin, setAdmin}){

    function handleLogOut(){
        fetch('/logout',{
            method: 'DELETE'
        }).then(setAmbassador(null))
    }

    function handleAdminLogOut(){
        fetch('/admin/logout',{
            method: 'DELETE'
        }).then(setAdmin(null))
    }

    return(
        <div className='nav-bar'>
            <p>Welcome</p>
            {ambassador? <button onClick={handleLogOut}>Logout Ambassador</button> : null}
            {admin? <button onClick={handleAdminLogOut}>Logout Admin</button> : null}
        </div>
    )
}

export default Navbar