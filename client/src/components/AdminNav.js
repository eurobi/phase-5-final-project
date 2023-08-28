import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"

function AdminNav({setAdmin}){

    const nav = useNavigate()

    function handleAdminLogOut(){
        fetch('/admin/logout',{
            method: 'DELETE'
        }).then(() => {
            setAdmin(null)
            nav('/')
            })
    }

    return(
        <>
            <button class='custom-button' onClick={handleAdminLogOut}>Admin Logout</button>
            <button class='custom-button'>
                <NavLink className={'nav-link'} to='/admin/ambassadors'>Ambassadors</NavLink>
            </button>
            <button class='custom-button'>
                <NavLink className={'nav-link'} class='custom-button' to='/admin'>Applications</NavLink>
            </button>
            <button class='custom-button'>
                <NavLink className={'nav-link'} to='/admin/payment_reports'>Payments</NavLink>
            </button>
        </>
    )
}

export default AdminNav