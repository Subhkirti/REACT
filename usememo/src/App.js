import {useState,useMemo} from 'react'

function App(){
  const [count, setCount] = useState(10)
  const [item,setItem]=useState(5);
  const memo=useMemo(function Submit(){
      console.log("multi function");
        return item*"10"},[item]
  )


  return(
   <>
   <h1>Increase: {count}</h1>
   <h1>Multiplication: {item}</h1>
   <h1>{memo}</h1>
   <button onClick={()=>{setCount(count+10)}}>Update Count!</button>
   <button onClick={()=>{setItem(item*5)}}>Update Multiplication!</button>

   </>
  );
}

export default App;
