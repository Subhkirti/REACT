import { useContext } from "react";
import Global from './App.jsx';
function Child1(){
    var final=useContext(Global)
    return(
        <h1>First Child kok{final}</h1>
    )
}
export default Child1;