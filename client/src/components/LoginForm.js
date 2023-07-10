function LoginForm(){
    return(
        <form id='login-form'>
                <label for='login-email-input'>Email</label>
                <input id='login-username-input' class='custom-input'></input>
                <label for='login-password-input'>Password</label>
                <input id='login-password-input' class='custom-input'></input>
                <input class='submit-btn' type='submit'></input>
            </form>
    )
}

export default LoginForm