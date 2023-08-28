import { useEffect, useState } from "react"
import PaymentCard from "./PaymentCard"

function PaymentList({admin}){

    const [paymentReports, setPaymentReports] = useState([])

    useEffect(()=> {
        fetch('/payment_reports')
        .then(response => {
            if(response.ok){
                response.json()
                .then(paymentReports => setPaymentReports(paymentReports))
            }
        })
    },[])


    const paymentCards = paymentReports.map(paymentReport => {
        return(
                <PaymentCard admin={admin} id={paymentReport.id} payment={paymentReport} />
        )
    })

    return(
        <div id='payment-report-container' class='card'>
            <h1>Payment Reports</h1>
            {paymentCards}
        </div>
    )

}

export default PaymentList