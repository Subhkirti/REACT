import { useState } from 'react'
import './Main.css'
import arr from './Api'
function Main(){
  var cart_arr=[];
  const [state, setstate] = useState(false)
  return (
    <>
      <div className="main-content">
        {arr.map((e) => {
          return (
            <>
              <div className="card">
                <i onClick={() => {setstate(!state)}}class={state ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
                <img className="img" src={e.img}></img>
                <p>{e.title}</p>
                <h5 className="rate">Brown, Without Glass</h5>
                <div className="rating">
                  <div className="star">{e.rating} 🌟 </div>({e.bracket})
                  <img class="logo" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" ></img>
                </div>
                <p>₹{e.price}<del> ₹999</del> 75% off</p>
                <button className="add-cart"  onClick={()=>{return(cart_arr.push(e))}}>ADD TO CART</button>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
export default Main
