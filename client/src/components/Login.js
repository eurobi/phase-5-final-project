import React, { useState } from "react"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"


function Login(){
    const [loggingIn, setLoggingIn] = useState(true)

    return(
        <div class='card' id='login-card'>
            <div>
                <button onClick={()=> setLoggingIn(true)} id={loggingIn? "selected-login" : null} class='login-signup-toggle'>Login</button>
                <button onClick={()=> setLoggingIn(false)} id={loggingIn? null : "selected-login"} class='login-signup-toggle'>Signup</button>
            </div>
            {loggingIn? <LoginForm/> : <SignUpForm/>}
        </div>
    )
}

export default Login