import { connect } from 'react-redux'
import Home from "../components/Home";
import { addToCart } from '../Services/Actions/index'


const mapStateToProps = state => ({
    data:state.cartItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)