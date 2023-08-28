import { useState } from "react"
import Home from "./Home"

function AmbassadorCard({ambassador, handleViewMore}){



    
        return(
            <div class='card' id='admin-stats-card'>
            <div class='dashboard-stat-item'>
                <p><strong>Ambassador:</strong> {ambassador.email}</p>
            </div>
            <div class='dashboard-stat-item'>
                <p><strong>All-time Sales Count:</strong> {ambassador.sales_count}</p>
            </div>
            <div class='dashboard-stat-item'>
                <p><strong>All-time Sales Amount:</strong> ${ambassador.sales_total}</p>
            </div>
            <div class='dashboard-stat-item'>
                <p><strong>All-time Commission Earned:</strong> ${ambassador.commission_earned}</p>
            </div> 
            <button id={ambassador.id} onClick={handleViewMore} class='dashboard-stat-item'>VIEW MORE</button>

        </div>
        )

}

export default AmbassadorCard