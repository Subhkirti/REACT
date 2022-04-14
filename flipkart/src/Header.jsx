import './Header.css'
import Logo from './logo'
import { BsFillCartFill } from 'react-icons/bs';
import Cart from './Cart';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
function Header(){
  return (
    <>
      <div className="nav-bar">
        <Logo />
        <input
        className="for-same" id="search" placeholder="Search for products, brands and more"
        ></input>
        <button  className="for-same" id="btn">
          Login
        </button>
        <li>Become a Seller</li>
        <select>
          <option>More</option>
          <option>Notification Prefrences</option>
          <option>Become a seller</option>
          <option>24x7 Customer care</option>
          <option>Advertise</option>
        </select>
        <Router>
        <li>
          <BsFillCartFill /><Link to="/Cart"> Cart</Link>
          <Routes>
            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>
        </li>
        </Router>
      </div>
    </>
  )
}
export default Header
