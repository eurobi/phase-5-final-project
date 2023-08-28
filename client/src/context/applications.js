import React, { useEffect, useState } from "react";

// create the context
const ApplicationsContext = React.createContext();

// create a provider component
function ApplicationsProvider({ children }) {
    const [applications, setApplications] = useState([])
    useEffect(()=> {
        fetch('/apps')
        .then(response => {
            if(response.ok){
                response.json()
                .then(applications => setApplications(applications))
            }
        })
    },[])
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <ApplicationsContext.Provider value={{applications, setApplications}}>{children}</ApplicationsContext.Provider>;
}

export { ApplicationsContext, ApplicationsProvider };