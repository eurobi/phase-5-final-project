import { useState } from "react"
import Login from "./Login"
import LoginForm from "./LoginForm"

function AdminLogin({setAdmin}){

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch('/admin/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok){
                r.json()
                .then(admin => {
                    setAdmin(admin)
                })
            }else{
                r.json()
                .then(error => console.log(error))
            }
        })
    }

    return(
        <div class='card' id='admin-login-card'>
            <form onSubmit={handleSubmit} id='login-form'>
                <label for='login-email-input'>Email</label>
                <input onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} id='login-username-input' class='custom-input'></input>
                <label for='login-password-input'>Password</label>
                <input onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} id='login-password-input' class='custom-input'></input>
                <input class='submit-btn' type='submit'></input>
            </form>
        </div>
    )

}

export default AdminLogin