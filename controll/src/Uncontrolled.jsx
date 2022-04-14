
import {useRef} from 'react'
function Uncontrol(){
    const Inputref = useRef("")
    function Change(){    
        var a=document.getElementById('user')
        a.value=Inputref.current.value
        a.style.color="red"
    }
    return(
        <>
        <form onSubmit={()=>{alert("Submitted Uncotrol!!")}}>
        <input id="user" ref={Inputref} onChange={Change} placeholder="For Uncontrol..." required></input>
        <button>submit!</button>
        </form>
        </>
    )
}
export default Uncontrol;