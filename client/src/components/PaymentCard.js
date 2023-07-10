function PaymentCard({payment}){
    return(
        <div class='payment-report-summary'>
            <p>{payment.month}</p>
            <p>${payment.commission_earned}</p>
            <p>{payment.paid? "Paid" : "Not yet paid"}</p>
        </div>
    )
}

export default PaymentCard