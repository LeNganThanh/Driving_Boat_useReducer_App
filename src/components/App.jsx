import React,{useEffect, useReducer} from "react";
import "../App.css"

import{engineReducer, initState} from "./engineReducer"

/**
 *  Main App
 * 
 * @returns 
 * 
 * p - to show status of Engine - speed - gear - distance
 * 
 * button to execute to Start/Stop engine
 * button to gearUp and button to gearDown
 * button to speedUp and button to speedDown
 * 
 */
function App() {
const [state, dispatch] = useReducer(engineReducer, initState);
/* useEffect(()=>{
    const randomStart= Math.floor(Math.random() * 2);
    setStart(randomStart);
},[])

function setStart(randomNum){
    dispatch({
        type:"startStop",
        val:randomNum
    })
} */

return (
    <div className="container">
            <h1>Boating with useReducer</h1>
            <div className="engineP">
                <p>{state.startState? "Engine On":"Engine Off"}</p>
                <p>Speed: {state.speed}km/h</p>
                <p>Gear: {state.gear}</p>
                <p>Distance: {state.distance}km</p>
            </div>
            
            <div className="engineBtn">
                <button onClick={()=>dispatch({type:"startStop"})}>{state.startState?"Stop":"Start"} </button>   
                <button onClick={()=>dispatch({type:"gearUp"})}>Gear up </button>
                <button onClick={()=>dispatch({type:"gearDown"})}>Gear down </button>
                <button onClick={()=>dispatch({type: "speedUp"})}>Increase speed </button>
                <button onClick={()=>dispatch({type: "speedDown"})}>Decrease speed </button>
            </div>
    </div>
    )
}

export default App;