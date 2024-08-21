import React, { useContext } from 'react'

import { StoreContext } from '../../context/Context'
const Cart = () => {
  const {cartItems, food_list, removeFromCart} =useContext(StoreContext)
  return (
    <div>
   <div>
    complete your payment
    <div>
      <p>Items</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    <br/>
    <hr/>
    {food_list.map((item,index)=>{
      if(cartItems[item.id]>0){
        return(
          <p>{item.name}</p>
        )
      }
    })}
    </div>
   </div> 
    </div>
  )
}

export default Cart
