import { useState, createContext, useContext } from "react"
import { ApplicationsContext } from "../context/applications"
import Admin from "./Admin"

function AppDetails({application}){

    const [formData, setFormData] = useState({
        coupon_code: "",
        commission_rate: 0,
        lifetime_commission: false

    })

    const {applications, setApplications} = useContext(ApplicationsContext)

    function handleAccept(e){
        e.preventDefault()
        fetch(`/ambassadors/accept/${application.ambassador_id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(r => {
            if(r.ok){
                r.json().then(application => {
                    setApplications([...applications].filter((app)=> app.id !== application.app.id))
                })
            }
        })
        
    }

    function handleDeny(e){
        e.preventDefault()
        fetch(`/ambassadors/deny/${application.ambassador_id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => {
            if(r.ok){
                r.json().then(application => {
                    console.log(applications)
                    console.log(application)
                    setApplications([...applications].filter((app)=> app.id !== application.app.id))
                })
            }
        })
        
    }


    return(
        <div>
            {application.website? <h5>Website: {application.website}</h5> : null}
            {application.tiktok_handle? <h5>TikTok Handle: {application.tiktok_handle}</h5> : null}
            {application.instagram_handle? <h5>Instagram Handle: {application.instagram_handle}</h5> : null}
            {application.youtube_link? <h5>YouTube Link: {application.youtube_link}</h5> : null}
            {application.twitter_handle? <h5>Twitter Handle: {application.twitter_handle}</h5> : null}
            {application.other_info? <h5>Other Information: {application.other_info}</h5> : null}
            <div class="app-action-div">
                <label for='coupon-input'>Coupon Code: </label>
                    <input value={formData.coupon_code} onChange={(e)=> setFormData({...formData, coupon_code: e.target.value})} id='coupon-input'></input>
                <label for='commission-input'>Commission %: </label>
                    <input value={formData.commission_rate} onChange={(e)=> setFormData({...formData, commission_rate: e.target.value})} id='commission-input'></input>
                <label for='ltc-input'>LTC?</label>
                    <input type='radio' id='ltc-input' onClick={()=> setFormData({...formData, lifetime_commission: !formData.lifetime_commission})} checked={formData.lifetime_commission}></input>
                <button onClick={handleAccept}>Accept</button>
                <button onClick={handleDeny}>Deny</button>
            </div>
            {application.mailing_address? <h5>Mailing Address: {application.mailing_address}</h5> : null}
        </div>
    )
}

export default AppDetails