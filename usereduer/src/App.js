//USEREDUCER:-when we have multiple state to handle. and also for side effects .its alerternate of usestate.
import {useReducer} from 'react';
var initialstate=0;
function Reducer(sta,action){
  switch(action.type){
    case "INCREMENT":
      return sta+1
    case "DECREMENT":
      return sta-1
    case "RESET":
      return initialstate
  }
}
function App() {
  const [state, dispatch] = useReducer(Reducer,initialstate)
  return (
   <>
   <h1>{state}</h1>
   <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
   <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
   <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
   </>
  );
}

export default App;
