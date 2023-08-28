import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PaymentDetails(){

    const params = useParams()
    const [payment, setPayment] = useState({})

    useEffect(()=> {
        fetch(`/payment_reports/${params.id}`)
        .then(r => {
            if(r.ok){
                r.json()
                .then(payment => setPayment(payment))
            }
        })
    },[])

    let rows

    if(payment.ambassador_payments){
    rows = payment.ambassador_payments.map((amb_payment => {
        return(
            <tr>
                <td>{amb_payment.email}</td>
                <td>{amb_payment.coupon_code}</td>
                <td>{amb_payment.total}</td>
            </tr>
        )
    }))}

    function handleCSV(){
        const csvData = payment.ambassador_payments.map(payment => {
            return [payment.email + "," + payment.coupon_code + "," + payment.total + '\n']
        })
        const csvContent = csvData.join('')
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    function handlePayment(e){
        fetch(`/payment_reports/${params.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({sent: true})

        })
        .then(r => {
            if(r.ok){
                r.json()
                .then(payment => {setPayment(payment)})
            }
        })
    }

    return(
        <div className="table-container">
            <h1>Month: {payment.month}</h1>
            <table className="payment-table">
                <tr>
                    <th>Paypal Email</th>
                    <th>Coupon Code</th>
                    <th>Total Commission</th>
                </tr>
                {rows? rows : null}
            </table>
            <button onClick={handleCSV} className="download-button">Download CSV</button>
            {payment.sent? <h4>This payment has been sent.</h4> : <button onClick={handlePayment} className="download-button">Mark as paid</button>}
        </div>

    )
}

export default PaymentDetails