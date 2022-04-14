import React,{useState,useEffect} from 'react';
function App() {
  const [state, setstate] = useState(1)
  const [data,setdata]=useState(10)
  useEffect(()=>{
    console.warn(state);
  })
  useEffect(()=>{
    console.warn(data);
  },[data])
  return (
   <>
   <h1>USEEFFECT IN HOOKS STATE {state}</h1>
   <h1>USEEFFECT IN HOOKS DATA  {data}</h1>

   <button onClick={()=>{setstate(state+1)}}>update state</button>
   <br></br>
   <button onClick={()=>{setdata(data*10)}}>update data</button>
   </>
  );
}

export default App;
