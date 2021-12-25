import "./style.css"
import React, {useState} from "react"
function RealCounter(){
    const [Counter2, setCounter]=useState(0);
    const increaseHandler=()=>{
        setCounter(Counter2+1)
    } 
    const DecreaseHandler=()=>{
        setCounter(Counter2-1)
    }
    return(
        <div className="parent">
            <button className="first-btn btn" onClick={increaseHandler}>+</button>
            <span className="span">{Counter2}</span>
            <button className="sec-btn btn" onClick={DecreaseHandler}>-</button>
            
        </div>
    )
}
export default RealCounter;