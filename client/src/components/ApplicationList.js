import { useContext, useEffect, useState } from "react"
import ApplicationAdmin from "./ApplicationAdmin"
import { ApplicationsContext } from "../context/applications"

function ApplicationList({}){
    const {applications, setApplications} = useContext(ApplicationsContext)
    

    const applicationElements = applications.map((application) => {
        return(<ApplicationAdmin application={application}></ApplicationAdmin>)
    })


    return(
        <div className="card" id='application-list-card'>
            <h1>Applications</h1>
            {applicationElements}
        </div>
    )
}

export default ApplicationList