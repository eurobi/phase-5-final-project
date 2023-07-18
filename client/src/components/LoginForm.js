import { useState } from "react"

function LoginForm(){

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok){
                r.json()
                .then(user => {
                    console.log(user)
                })
            }else{
                r.json()
                .then(error => console.log(error))
            }
        })
    }

    return(
        <form onSubmit={handleSubmit} id='login-form'>
                <label for='login-email-input'>Email</label>
                <input onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} id='login-username-input' class='custom-input'></input>
                <label for='login-password-input'>Password</label>
                <input id='login-password-input' class='custom-input'></input>
                <input onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} class='submit-btn' type='submit'></input>
            </form>
    )
}

export default LoginForm