import React,{useReducer} from "react";
import "./App.css"

//initial value
const initState = {
    startState: false,
    speed: 0,
    gear: 0,
    distance: 0,
}
//Reducer for execute the engine
const engineReducer = (state,action)=>{
    switch (action.type){
//checking state if false then set true - the button for false is "Start" and when click "Start" then state turn to false and button is "Stop"
        case "startStop":{
            if(state.startState === false){
            return{
                ...state,
                startState: true,
            }}
            else{
                return{
                     ...state,
                startState: false,
                gear: 0,
                }
            }
        }

/**
In case Engine is OFF (startState : false) then popup the Alert and return to start page 
*/        
//checking "gear" if less than 5 and state of Engine is ON(true) then can gearUp
        case "gearUp":{
          if(state.gear <5 && state.startState === true){
            return { 
                ...state,gear: 
                state.gear +1}
          }
          else {alert("Engine is OFF")
          return {...state}}
        }
//gear between -2 and 5 and state of Engine is ON can gearDown
        case "gearDown":{
            if(state.gear >-2 &&state.gear <5 && state.startState === true){
              return { 
                  ...state,gear: 
                  state.gear -1}
            }

            else {alert("Engine is OFF")
            return {...state}}
          }
/* 
1. In case the engine is OFF (startState: false) and gear = 0 then speed could not increase or decrease then popup Alert and return to start page 
*/

/* 
Distance is 5* speed :)
Speed up has 4 cases:
1. gear between 0 and 5 then normal speed up (+1)
2. gear = 5 then the speed get each click (+5)
3. gear = -1 then speed is normal (+1)
4. gear = -2 the speed is getting faster (+5)
*/
        case "speedUp":{
            if(state.gear > 0 && state.gear <5 && state.startState === true){
            return{ 
                ...state,
                speed: state.speed +1,
                distance: state.speed *5,
            }}
            else if (state.gear ===5 && state.startState === true){
                return{
                    ...state,
                    speed: state.speed +5,
                    distance: state.speed *5,
                }
            }
            else if (state.gear ===-1 && state.startState === true){
                return{
                    ...state,
                    speed: state.speed +1,
                    distance: state.speed *5,
                }
            }
            else if (state.gear ===-2 && state.startState === true){
                return{
                    ...state,
                    speed: state.speed +5,
                    distance: state.speed *5,
                }
            }
            
            else if(state.gear ===0) {{alert("Engine is OFF")
             return {...state}}}
        }

//decrease the speed in case gear between 0 and 5 and check the speed is greater than 0 ( speed cannot be a minus value) if speed to 0 then set it to 0 
        case "speedDown":{
            if(state.gear > 0 && state.gear <5 && state.startState === true){
                if(state.speed >0){
                return { 
                    ...state, 
                    speed: state.speed -5,
                }}
                else return{speed:0}
            }
              else if( state.gear ===0){{alert("Engine is OFF")
              return {...state}}}
        }

        default: alert ("Engine is broken 😢 ") 
    }

}

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