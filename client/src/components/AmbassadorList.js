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

    if(viewingMore){
        const ambassador = ambassadors.filter((amb)=> amb.id == viewingMore)
        return(
            <>
            <Dashboard admin={admin} ambassador={ambassador[0]}></Dashboard>
            <button class='submit-btn' onClick={() => setViewingMore()}>Back to Ambassadors</button>
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