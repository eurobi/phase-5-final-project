import AdminLogin from "./AdminLogin"

function Admin({admin, setAdmin}){
    // if admin exists
    if(admin){
        return(
            <h1>ADMIN BE HERE</h1>
        )
    }else{
        return(
        <AdminLogin setAdmin={setAdmin}></AdminLogin>
        )
    }

}

export default Admin