import PaymentCard from "./PaymentCard"

function Dashboard({ambassador}){

    const last14 = ambassador.last_14_days.map((day) => {
        let ht
        if(day.total_amount > 0){
            ht = day.total_amount / ambassador.last_14_max *290
        }else{
            ht = 0
        }
        
        return(
            <div style={{height: ht}} className="l14-bar">{day.total_amount > 0? "$" + day.total_amount: null}</div>
        )
    })

    return(
        <div>
                    <h1>{ambassador.app.first_name} {ambassador.app.last_name}</h1>
                    <h2>Sales Summary</h2>
                    <div class='card' id='dashboard-stats-card'>
                        <div class='dashboard-stat-item'>
                            <p><strong>All-time Sales Count:</strong> {ambassador.sales_count}</p>
                        </div>
                        <div class='dashboard-stat-item'>
                            <p><strong>All-time Sales Amount:</strong> ${ambassador.sales_total}</p>
                        </div>
                        <div class='dashboard-stat-item'>
                            <p><strong>Commission Rate:</strong> {ambassador.commission_rate * 100}%</p>
                        </div> 
                        <div class='dashboard-stat-item'>
                            <p><strong>All-time Commission Earned:</strong> ${ambassador.commission_earned}</p>
                        </div> 

                    </div>
                    <h2>Last 14 Days</h2>
                    <div class='card'>
                        <div id='l-14-chart'>
                            {last14}
                        </div>
                    </div>
                    <h2>Payments</h2>
                    <div class='card'>
                        <div id='payment-report-card'>
                        <div class='payment-report-summary-header'>
                            <p>Month</p>
                            <p>Payment Amount</p>
                            <p>Status</p>
                        </div>
                            {ambassador.payments? ambassador.payments.map((payment) => <PaymentCard payment={payment}></PaymentCard>) : null}
                        </div>
                    </div>
                </div>
    )
}

export default Dashboard