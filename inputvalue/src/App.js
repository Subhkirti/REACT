import React,{useState} from "react";
function App() {
  const [state, setstate] = useState(null)
  const [data,setdata]=useState(false)
  function getdata(val){
    setstate(val.target.value)
    setdata(false)
  }
  return (
  <>
  <h1>Get Input Box value</h1>
  {data?<h2>{state}</h2>:null}
  <input type="text" onChange={getdata}></input>
  <button onClick={()=>setdata(true)}>Click me!</button>
  </>
  );
}

export default App;
