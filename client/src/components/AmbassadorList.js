import { useEffect, useState } from "react"
import AmbassadorCard from "./AmbassadorCard"
import Dashboard from "./Dashboard"
function AmbassadorList({admin}){

    const [ambassadors, setAmbassadors] = useState([])
    useEffect(()=>{
        fetch('/ambassadors/accepted')
        .then(resp => {
          if(resp.ok){
            resp.json()
            .then(ambassadors => setAmbassadors(ambassadors))
          }
        })
      },[])

      const ambassadorElements = ambassadors.map((ambassador) => {
        return(
            <AmbassadorCard handleViewMore={handleViewMore} key={ambassador.id} ambassador={ambassador}></AmbassadorCard>
        )
      })

    const [viewingMore, setViewingMore] = useState()

    function handleViewMore(e){
        e.preventDefault()
        setViewingMore(e.target.id)

    }

    function handleDelete(id){
        console.log(id)
        fetch(`/ambassadors/${id}`,{
            method: "DELETE"
        }).then(r => {
            if(r.ok){
                r.json().then(ambassador => {
                    setAmbassadors([...ambassadors].filter((amb)=> amb.id !== ambassador.id))
                    setViewingMore()
                })
            }
        })
    }

    if(viewingMore){
        const ambassador = ambassadors.filter((amb)=> amb.id == viewingMore)
        return(
            <>
            <Dashboard admin={admin} ambassador={ambassador[0]}></Dashboard>
            <div className="admin-ambassador-buttons">
                <button class='submit-btn' onClick={() => setViewingMore()}>Back to Ambassadors</button>
                <button class='submit-btn' onClick={() => handleDelete(viewingMore)}>Remove Ambassador</button>
            </div>
            </>
        )
    }
    else{
        return(
            <>
            <h1>Active Ambassadors</h1>
            {ambassadorElements}
            </>
        )
    }
    

}

export default AmbassadorList