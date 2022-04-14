import HomeContainer from "./Containers/HomeCompo"
function App(){
    return(
        <>
            <HomeContainer />
            <div className="card">
            <i class="fa-solid fa-cart-plus"></i>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsF5VToYGmzY7vVNUGT824x_8MH6I2kHN4dA&usqp=CAU" alt="" />
            </div>
          
                <span>
                    I-phone
              <br />
                    price:1000$
                </span>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        </>
    )
}
export default App;