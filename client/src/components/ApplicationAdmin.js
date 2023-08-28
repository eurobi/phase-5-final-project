import { useState } from "react"
import AppDetails from "./AppDetails"

function ApplicationAdmin({application}){
    const [detailView, setDetailView] = useState(false)

    return(
        <div className="card" id='app-item'>
            <h3>{application.first_name} {application.last_name}</h3>
            <h4>{application.ambassador_type}</h4>
            {detailView? <AppDetails application={application}></AppDetails> : null}
            <button onClick={()=> setDetailView(!detailView)} className="submit-btn">{detailView? "Collapse": "View"}</button>
        </div>
    )
}

export default ApplicationAdmin