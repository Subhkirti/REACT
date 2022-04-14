import {useState} from 'react';
import Second from './second'
function App() {
  const [state, setstate] = useState("")
  function Parent(value){
    setstate(value.class)
  }
  return (
    <>
    <h1>finish! {state}</h1>
    <Second data="patna" valu={Parent}/>
    </>

  );
}

export default App;
