import { useContext } from "react"
import { ResponseDataContext } from "../../App";
import "./ResultState.css"
export default function ResultState({responseData}){
    return (
        <div className = "result">
            <div className = "text">
            The sentient rating is: {responseData.rating}%
            </div>
        </div>
    ) 
}