//initial value
export const initState = {
  startState: false,
  speed: 0,
  gear: 0,
  distance: 0,
};

//Reducer for execute the engine
export const engineReducer = (state, action) => {
  switch (action.type) {
    //checking state if false then set true and give 50% chance to start :) - the button for false is "Start" and when click "Start" then state turn to false and button is "Stop"
    case "startStop": {
      if (state.startState === false && Math.random() > 0.5) {
        return {
          ...state,
          startState: true,
        };
      } else {
        return {
          ...state,
          startState: false,
          gear: 0,
        };
      }
    }

    /**
In case Engine is OFF (startState : false) then popup the Alert and return to start page 
*/
    //checking "gear" if less than 5 and state of Engine is ON(true) then can gearUp
    case "gearUp": {
      if (state.gear < 5 && state.startState === true) {
        return {
          ...state,
          gear: state.gear + 1,
        };
      } else {
        alert("Engine is OFF");
        return { ...state };
      }
    }
    //gear between -2 and 5 and state of Engine is ON can gearDown
    case "gearDown": {
      if (state.gear > -2 && state.gear <= 5 && state.startState === true) {
        return {
          ...state,
          gear: state.gear - 1,
        };
      } else {
        alert("Engine is OFF");
        return { ...state };
      }
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
    case "speedUp": {
      if (state.gear !== 0 && state.gear < 5 && state.startState === true) {
        return {
          ...state,
          speed: state.speed + 1 * Math.abs(state.gear),
          distance: state.speed * 5,
        };
      }
      return { ...state };
    }

    //decrease the speed in case gear between 0 and 5 and check the speed is greater than 0 ( speed cannot be a minus value) if speed to 0 then set it to 0
    case "speedDown": {
      if (state.gear !== 0 && state.gear < 5 && state.startState === true) {
        return {
          ...state,
          speed: state.speed - 1 * Math.abs(state.gear),
          distance: state.speed * 5,
        };
      }
      return { ...state };
    }

    default:
      alert("Engine is broken 😢 ");
  }
};
