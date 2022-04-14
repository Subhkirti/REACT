import React,{ useState } from "react";
function App(){
  const [state, setstate] = useState("")
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  function valid_name(e){
    setname(e.target.value)
  }
  function valid_dob(e){
    setstate(e.target.value)
  }
  function valid_email(e){
    setemail(e.target.value)
  }
  function validity(event){
      event.preventDefault()
      console.log(name + " Your dob is " + state + " and email is " + email);
      alert(name + " Your dob is " + state + " and email is " + email)
  }
  return (
    <>
      <form onSubmit={validity}>
        <label>
          Name: <input type="text" value={name} onChange={valid_name} required></input>
        </label>
        <br></br>
        <label>
          D.O.B.: <input type="date" value={state} onChange={valid_dob} required></input>
        </label>
        <br></br>
        <label htmlFor="input">
          E-mail: <input type="email" value={email} onChange={valid_email} id="input" required></input>
        </label>
        <br></br>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
