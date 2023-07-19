import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Application from "./Application"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Navbar from "./Navbar"

function Home({ambassador, setAmbassador}){
    
    // if ambassador exists
    if(ambassador){
        //if ambassador exists and has applied
        if(ambassador.app){
            //if ambasssador exists, applied, was accepted
            if(ambassador.app.accepted){
                return(
                    <Dashboard ambassador={ambassador}></Dashboard>)
                //if ambassador exists, applied, and is pending
                }else if(ambassador.app.accepted == null){
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
                <Application ambassador={ambassador}></Application>
            )

        }
    // if abassador doesnt exist
    }else{
        return(
        <Login setAmbassador={setAmbassador}></Login>
        )
    }

}

export default Home