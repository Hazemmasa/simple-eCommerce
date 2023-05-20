import React, { useContext } from 'react' ; 
import { PRODUCTS } from '../../products';
import './product.css' ;
import { ShopContext } from '../../context/shop-context';



const Product = (props) => {

const {id,productImage,productName,price} = props.data
const {addToCart,cartItems} = useContext(ShopContext)

const ceateItemAmount = cartItems[id]



    return (
        <div className="product">
          <img className='imgProduct' src={productImage} />
          <div className="description">
            <p>
              <b>{productName}</b>
            </p>
            <p> ${price}</p>
                <div className='main-button'>
                <button className="addToCartBttn" onClick={()=> addToCart(id)}>
                            Add to cart{ceateItemAmount > 0 && <>({ceateItemAmount})</>}
                </button>
                </div>
      
          </div>

        </div>
      );
}

export default Product