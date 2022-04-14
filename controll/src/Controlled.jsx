import { useState } from 'react'
function Control() {
  const [state, setState] = useState('')
  function Inputfield(e) {
    setState(e.target.value)
  }
  function Submit(){
    alert('Control  Submitted!!')
  }
  return (
    <>
      <form onSubmit={Submit}>
        <input
          onChange={Inputfield}
          value={state}
          placeholder="For control..."
          required
        ></input>
        <button>Click me</button>
      </form>
    </>
  )
}
export default Control
