import {useRef} from "react";
function App(){
  let for_ref=useRef("")
  function submit(){
    for_ref.current.value="hello"
    // for_ref.current.style.color="blue"
    // for_ref.current.focus()
    // for_ref.current.style.display="none"
  }

  return (
    <>
    <h1>world</h1>
    <input type="text" ref={for_ref}/>
    <button onClick={submit} >click me!</button>
   
    </>
  );
}

export default App;
