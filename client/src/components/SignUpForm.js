import { useState } from "react"

function SignUpForm({setAmbassador}){

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password_confirmation: ""
    })

    const [error, setError] = useState()

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
                .then((e) => setError(e.errors))
            }
        })
    }


    return(
        <form onSubmit={handleSubmit} id='login-form'>
                <label for='signup-email-input'>Email</label>
                <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} id='signup-username-input' class='custom-input'></input>
                <label for='signup-password-input'>Password</label>
                <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} id='signup-password-input' class='custom-input'></input>
                <label for='signup-password-conf-input'>Confirm Password</label>
                <input type="password" value={formData.password_confirmation} onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})} id='signup-password-conf-input' class='custom-input'></input>
                {error? <p className="error-message">{error}</p> : null}
                <input class='submit-btn' type='submit'></input>
            </form>
    )
}

export default SignUpForm