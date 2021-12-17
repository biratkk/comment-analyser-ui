import { useState, useContext } from "react"
import { ResponseDataContext } from "../../App";
import getCommentAnalysis from "../../ConnectionFunctions/getCommentAnalysis";
import './EnterState.css'
export default function EnterState({setResponseReceived}){
    const [url, seturl] = useState("")
    
    let {responseData, setResponseData} = useContext(ResponseDataContext);
    const handleChange = (e) => seturl(e.target.value); 

    const handleClick = async() => {
        let {data} = await getCommentAnalysis(url);
        setResponseData(data);
        setResponseReceived(true)
    }
    return (
        <div className = "input-placeholder">
            <input
            placeholder = {"Enter URL here"}
            onChange = {handleChange}>
            </input>
            <button onClick = {handleClick}>
                Submit
            </button>
        </div>
    ) 
}
