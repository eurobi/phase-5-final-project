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
                        <div className="card">
                            <h2>Thank you for applying!</h2>
                            <h4>Your application is pending approval.</h4>

                        </div>
                    )
                //if ambassador exists, applied, and is denied
                }else{
                    return(
                        <div className="card">
                            <h2>Thank you for applying to become a Sundays Ambassador</h2>
                            <h4>Unfortunately, we are not able to accept your application at this time.</h4>

                        </div>
                    )
            }
        //if ambassador hasn't applied
        }else{
            return(
                <Application setAmbassador={setAmbassador} ambassador={ambassador}></Application>
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