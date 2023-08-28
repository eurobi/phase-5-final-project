import React from 'react'
import { NavLink } from 'react-router-dom';
import AdminNav from './AdminNav';
import AmbassadorNav from './AmbassadorNav';

function Navbar({ambassador, setAmbassador, admin, setAdmin}){

    return(
        <div className='nav-bar'>
            {ambassador? <AmbassadorNav setAmbassador={setAmbassador}/> : null}
            {admin? <AdminNav setAdmin={setAdmin}/> : null}
        </div>
    )
}

export default Navbar