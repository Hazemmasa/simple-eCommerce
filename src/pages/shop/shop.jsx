import React from 'react';
import { PRODUCTS } from '../../products';
import Product from './product';
import './shop.css';


const Shop = () => {


  return (
    <div className='shop'>
      <div className='container'>
      <div className='shopTitle'>
            <h1> HAZEM'S SHOP</h1>
        </div>


        <div className='products'>
    {PRODUCTS.map((product) =>{
        return (
        <Product data = {product}/>

        )

})}



        </div>
      </div>

    </div>
  )
}

export default Shop