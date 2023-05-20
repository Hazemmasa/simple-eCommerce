import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';



export const ShopContext = createContext(null)


const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };



export const ShopContextProvider = (props) => {
    const [cartItems , setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };

    const  updateCartItemCount = (newAmout , itemid)=>{
      setCartItems((prev) => ({...prev ,[itemid] : newAmout }))
    }

    
      const totalAmoutHandler = ()=>{
        let totalAmmout= 0  
        for (const item in cartItems) {
          if(cartItems[item] > 0){
         let iteminfo = PRODUCTS.find((product) => product.id === Number(item))
         totalAmmout += cartItems[item] * iteminfo.price
          }
      }
      return totalAmmout
      }




const contextValue = {cartItems , addToCart , removeFromCart ,totalAmoutHandler ,updateCartItemCount}

    return <ShopContext.Provider value = {contextValue}>{props.children}</ShopContext.Provider>
  
    
  }
