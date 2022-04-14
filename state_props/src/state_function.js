import React,{useState} from 'react';
function Stat(){
    const [state, setstate] = useState("Hello...")
    const up=()=>{
        setstate("world")
    }
    return(
    <>
    <h1>{state}</h1>
    <button onClick={up}>update</button>
    </>)
}
export default Stat;