import React,{useState,useMemo} from "react";
function App(){
    const [count,setstate]=useState(1);
    const multicount=useMemo(function my(){
        return count*5
    }, [count])

    return(
        <>
        <h1>Function Component: {multicount}</h1>
        <button onClick={()=>{setstate(count+1)}}>Update function component</button>
        </>
    )
}
export default App;