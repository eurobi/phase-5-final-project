import { useState } from "react"
import Login from "./Login"
import LoginForm from "./LoginForm"

function AdminLogin({setAdmin}){

    const [error, setError] = useState()

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
                .then(error => setError(error))
            }
        })
    }

    return(
        <div class='card' id='admin-login-card'>
            <form onSubmit={handleSubmit} id='login-form'>
                <label for='login-email-input'>Email</label>
                <input onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} id='login-username-input' class='custom-input'></input>
                <label for='login-password-input'>Password</label>
                <input type="password" onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} id='login-password-input' class='custom-input'></input>
                {error? <p className="error-message">{error.error}</p> : null}
                <input class='submit-btn' type='submit'></input>
            </form>
        </div>
    )

}

export default AdminLogin