import React,{useReducer} from "react";
import "./App.css"

const initState = {
    startState: false,
    speed: 0,
    gear: 0,
    distance: 0,
}
const engineReducer = (state,action)=>{
    switch (action.type){

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

        case "gearUp":{
          if(state.gear <5 && state.startState === true){
            return { 
                ...state,gear: 
                state.gear +1}
          }
          else {alert("Engine is OFF")
          return {...state}}
        }

        case "gearDown":{
            if(state.gear >-2 &&state.gear <5 && state.startState === true){
              return { 
                  ...state,gear: 
                  state.gear -1}
            }

            else {alert("Engine is OFF")
            return {...state}}
          }

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