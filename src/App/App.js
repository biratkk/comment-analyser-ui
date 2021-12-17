
import './App.css';
import { useState, useContext, createContext, Suspense } from 'react';
import EnterState from './AppStates/EnterState/EnterState'
import LoadingState from './AppStates/LoadingState/LoadingState'
import ResultState from './AppStates/ResultState/ResultState'




// by default appState has to be 0

export const ResponseDataContext = createContext(); 
export default function App(){
  
  const [responseReceived, setResponseReceived] = useState(false);
  const [responseData, setResponseData] = useState({})
  return (
    // <LoadingState/>
    <ResponseDataContext.Provider value = {{responseData, setResponseData}}>
    <Suspense fallback = {<LoadingState/>}>
          {responseReceived === false ? 
          <EnterState
          setResponseReceived = {setResponseReceived}/> 
          :
          <ResultState responseData = {responseData}/>}
    </Suspense>
    </ResponseDataContext.Provider>
  );
}

