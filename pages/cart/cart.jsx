import React,{useContext} from 'react'
import { PRODUCTS } from '../../products'
import Product from '../shop/product'
import { ShopContext } from '../../context/shop-context';
import CartItem from './cartItem';
import './cart.css';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const navigate = useNavigate()
  const {cartItems , totalAmoutHandler} = useContext(ShopContext)

  const totalAmonut =totalAmoutHandler()



  return (
    <div className='cart'>
      <h1 className='cartTitle'>Your cart items</h1>

      <div className='cartItems'>
      {PRODUCTS.map((product) =>{
    
       if(cartItems[product.id] !== 0 ){
        return <CartItem data={product} />
       }

        

})}
      </div>
      {totalAmonut > 0 ? 
      <div>
        <div>
          <p>Total Amout : {totalAmonut}$</p>
        </div>
        <button className='ContinueShopping' onClick={()=> navigate("/")}> Continue Shopping? </button>
      </div>
: <p>Your Cart is Empty</p>}
    </div>
  )
}

export default Cart