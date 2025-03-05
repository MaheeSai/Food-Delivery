import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

const{getTotalCartAmount}=useContext(StoreContext)

  return (
    <div className="place-order">
      <div className="place-order-left">
        <div className="place-order-title">
          <p>Delivery Information</p>
          <div className="multi-details">
            <input type="text" placeholder='firstname' />
            <input type="text" placeholder='lastname'/>
          </div>
          <input type="email" placeholder='email'/>
          <input type="text" placeholder='street' />
          <div className="multi-details">
            <input type="text" placeholder='city' />
            <input type="text" placeholder='state'/>
          </div>
          <div className="multi-details">
            <input type="text" placeholder='pincode' />
            <input type="text" placeholder='country'/>
          </div>
          <input type='tel' placeholder='phone'/>
        </div>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-bottom-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cart-bottom-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <div className="cart-bottom-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
          <button >Proceed To Payment</button>
        </div> 
      </div>
    </div>
  )
}

export default PlaceOrder