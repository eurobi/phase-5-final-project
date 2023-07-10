import { useState } from "react"

function Application(){
     const [formData, setFormData] = useState({
        first_name : '',
        last_name : '',
        ambassador_type: 'Online Creator/Social Media Influencer',
        mailing_address: '',
        website: '',
        tiktok_handle: '',
        youtube_link: '',
        instagram_handle: '',
        twitter_handle: '',
        other_info: '',
        ambassador_id: 8
     })

     function handleSubmit(e){
        e.preventDefault()
        fetch('/apps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
     }


    return(
        <div class="card">
            <h1>Apply to become a Sundays Partner</h1>
            <form id='application-form' onSubmit={handleSubmit}>
                <label for='first-name-input'>First Name *</label>
                <input value={formData.first_name} onChange={(e)=> {setFormData({...formData, first_name: e.target.value})}} required id='first-name-input' class='custom-input'></input>

                <label for='last-name-input'>Last Name *</label>
                <input value={formData.last_name} onChange={(e)=> {setFormData({...formData, last_name: e.target.value})}} required id='last-name-input' class='custom-input'></input>

                <label for='type-input'>How would you best describe your business?</label>
                <select value={formData.ambassador_type} onChange={(e)=> {setFormData({...formData, ambassador_type: e.target.value})}} required id='type-input' class='custom-input'>
                    <option value='Online Creator/Social Media Influencer'>Online Creator/Social Media Influencer</option>
                    <option value='Dog Groomer'>Dog Groomer</option>
                    <option value='Vet Office'>Vet Office</option>
                    <option value='Shelter'>Shelter</option>
                    <option value='Other'>Other</option>
                </select>

                <label for='address-input'>Mailing Address *</label>
                <input value={formData.mailing_address} onChange={(e)=> {setFormData({...formData, mailing_address: e.target.value})}} required id='address-input' class='custom-input-long'></input>

                <h2>Business Info - Please fill out relevant fields</h2>
                <label for='website-input'>Website</label>
                <input value={formData.website} onChange={(e)=> {setFormData({...formData, website: e.target.value})}} id='website-input' class='custom-input'></input>

                <label for='instagram-input'>Instagram Handle</label>
                <input value={formData.instagram_handle} onChange={(e)=> {setFormData({...formData, instagram_handle: e.target.value})}} id='instagram-input' class='custom-input'></input>

                <label for='youtube-input'>YouTube Link</label>
                <input value={formData.youtube_link} onChange={(e)=> {setFormData({...formData, youtube_link: e.target.value})}} id='youtube-input' class='custom-input'></input>

                <label for='tiktok-input'>TikTok Handle</label>
                <input value={formData.tiktok_handle} onChange={(e)=> {setFormData({...formData, tiktok_handle: e.target.value})}} id='tiktok-input' class='custom-input'></input>

                <label for='twitter-input'>Twitter Handle</label>
                <input value={formData.twitter_handle} onChange={(e)=> {setFormData({...formData, twitter_handle: e.target.value})}} id='twitter-input' class='custom-input'></input>

                <label for='other-input'>Please add any other information/links that you think we should have</label>
                <input value={formData.other_info} onChange={(e)=> {setFormData({...formData, other_info: e.target.value})}} id='other-input' class='custom-input-long'></input>

                <input class='submit-btn' type='submit'></input>
            </form>
        </div>
    )
}

export default Application