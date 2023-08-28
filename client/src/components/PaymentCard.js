import { useNavigate } from "react-router-dom"

function PaymentCard({payment, admin}){

    const nav = useNavigate()

    function handleDetails(e){
        e.preventDefault()
        nav(`/admin/payment_reports/${payment.id}`)
    }
    return(
        <div class='payment-report-summary'>
            <p>{payment.month}</p>
            <p>${payment.commission_earned}</p>
            <p>{payment.sent? "Paid" : "Not yet paid"}</p>
            {admin? <button className="details-button" onClick={handleDetails}>Details</button> : null}
        </div>
    )
}

export default PaymentCard