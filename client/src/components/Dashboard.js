import PaymentCard from "./PaymentCard"

function Dashboard({amb}){
    return(
        <div>
                    <h1>Welcome, {amb.app.first_name} {amb.app.last_name}</h1>
                    <h2>Sales Summary</h2>
                    <div class='card' id='dashboard-stats-card'>
                        <div class='dashboard-stat-item'>
                            <p><strong>All-time Sales Count:</strong> {amb.sales_count}</p>
                        </div>
                        <div class='dashboard-stat-item'>
                            <p><strong>All-time Sales Amount:</strong> ${amb.sales_total}</p>
                        </div>
                        <div class='dashboard-stat-item'>
                            <p><strong>Commission Rate:</strong> {amb.commission_rate * 100}%</p>
                        </div> 
                        <div class='dashboard-stat-item'>
                            <p><strong>All-time Commission Earned:</strong> ${amb.commission_earned}</p>
                        </div> 

                    </div>
                    <h2>Last 14 Days</h2>
                    <div class='card'>
                        <div id='l-14-chart'>

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
                            {amb.payments? amb.payments.map((payment) => <PaymentCard payment={payment}></PaymentCard>) : null}
                        </div>
                    </div>
                </div>
    )
}

export default Dashboard