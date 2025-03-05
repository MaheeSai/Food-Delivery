import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItem, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext)
  const navigate=useNavigate()

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItem[item.id] > 0) {
              return (
                <div key={index}>
                  <div  className="cart-items-title cart-items-item">
                    <img src={item.image} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItem[item.id]}</p>
                    <p>${item.price * cartItem[item.id]}</p>
                    <p onClick={()=>removeFromCart(item.id)} className='cross'>X</p>
                  </div>
                  <hr />
                </div>
              )
            }
          })
        }

      </div>
      <div className="cart-bottom">
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
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div> 
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode,Enter here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='promocode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Cart