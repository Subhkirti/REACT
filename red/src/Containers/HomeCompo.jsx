import Home from "../Components/Home";
import { connect } from 'react-redux';
import {AddtoCart} from '../Services/Action/action'
const mapDispatch=dispatch=>({
    addToCartHandler:data=> dispatch(AddtoCart(data))
})
// export default Home