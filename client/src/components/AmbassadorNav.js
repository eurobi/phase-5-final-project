function AmbassadorNav({setAmbassador}){

    function handleLogOut(){
        fetch('/logout',{
            method: 'DELETE'
        }).then(setAmbassador(null))
    }

    return(
        <button className="custom-button" onClick={handleLogOut}>Logout Ambassador</button>
    )
}

export default AmbassadorNav