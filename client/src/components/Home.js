import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Application from "./Application"
import Dashboard from "./Dashboard"

function Home(){

    const { id } = useParams()

    const [amb, setAmb] = useState()
    
    useEffect(() => {
        fetch(`/ambassadors/${id}`)
        .then((r) => r.json())
        .then((amb) => setAmb(amb))
    },[])

    
    // if ambassador exists
    if(amb){
        //if ambassador exists and has applied
        if(amb.app){
            //if ambasssador exists, applied, was accepted
            if(amb.app.accepted){
                return(
                    <Dashboard amb={amb}></Dashboard>)
                //if ambassador exists, applied, and is pending
                }else if(amb.app.accepted == null){
                    return(
                        <h1>Pending</h1>
                    )
                //if ambassador exists, applied, and is denied
                }else{
                    return(
                        <h1>Denied</h1>
                    )
            }
        //if ambassador hasn't applied
        }else{
            return(
                <Application amb={amb}></Application>
            )

        }
    // if abassador doesnt exist
    }else{
        <h1>non-existant</h1>
    }

}

export default Home