import {useState} from 'react';
function App(){
  return (
  <>
  <HOC data={<Component />} />

  </>
  );
}
function HOC(props){
  return(
    <>
    <div style={{padding:"1%",backgroundColor:"red" ,width:"70px",height:"90px"}}>{props.data}</div>
    <div style={{padding:"1%",backgroundColor:"blue" ,width:"70px",height:"90px"}}>{props.data}</div>
    <div style={{padding:"1%",backgroundColor:"green" ,width:"70px",height:"90px"}}>{props.data}</div>

    </>
  )
}

function Component(){
  const [state, setstate] = useState(0)
  return(
    <>
    <h1>{state}</h1>
    <button onClick={()=>{setstate(state+1)}}>update</button>
    </>
  )
}
export default App;
