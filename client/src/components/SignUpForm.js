import { useState } from "react"

function SignUpForm({setAmbassador}){

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password_confirmation: ""
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok){
                r.json()
                .then((amb) => setAmbassador(amb))
            }
            else{
                r.json()
                .then((e) => console.log(e.errors))
            }
        })
    }


    return(
        <form onSubmit={handleSubmit} id='login-form'>
                <label for='signup-email-input'>Email</label>
                <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} id='signup-username-input' class='custom-input'></input>
                <label for='signup-password-input'>Password</label>
                <input value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} id='signup-password-input' class='custom-input'></input>
                <label for='signup-password-conf-input'>Confirm Password</label>
                <input value={formData.password_confirmation} onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})} id='signup-password-conf-input' class='custom-input'></input>
                <input class='submit-btn' type='submit'></input>
            </form>
    )
}

export default SignUpForm