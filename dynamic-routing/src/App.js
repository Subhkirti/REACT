import {BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import User1 from './user1.jsx';
function App(){
  let arr = [
    {
      id: 1,
      user: 'Namrata',
      age: '45',
    },
    {
      id: 2,
      user: 'Neetu',
      age: '99',
    },
    {
      id: 3,
      user: 'Shaheen',
      age: '33',
    },
  ]
  return (
    <div className="App" style={{textAlign:"center",fontFamily:"Arial"}}>
      <Router>
      <h1>DYNAMIC REACT</h1>
        {
        arr.map((e)=>
          <Link to={"/user/"+e.id}><h3>{e.user}</h3></Link>)
        }
        <Route path={"/user1/:id"} element={<User1 />}></Route>
        </Router>
    </div>
  )
}
export default App
