import { useContext, createContext, useEffect, useState } from "react"
import { ApplicationsProvider } from "../context/applications"
import AdminLogin from "./AdminLogin"
import ApplicationList from "./ApplicationList"



function Admin({admin, setAdmin}){

    // const [applications, setApplications] = useState([])
    // useEffect(()=> {
    //     fetch('/apps')
    //     .then(response => {
    //         if(response.ok){
    //             response.json()
    //             .then(applications => setApplications(applications))
    //         }
    //     })
    // },[])


    // if admin exists
    if(admin){
        return(
            <ApplicationsProvider>
                <ApplicationList></ApplicationList>
            </ApplicationsProvider>
        )
    //if admin doesnt exits
    }else{
        return(
        <AdminLogin setAdmin={setAdmin}></AdminLogin>
        )
    }

}

export default Admin