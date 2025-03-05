import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

const[currState,setCurrState]=useState('SignUp')

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
            </div>
            <div className="login-popup-inputs">
                {currState==='SignUp'?<input type='text' placeholder='your name' required/>:<></>}
                <input type='email' placeholder='your email' required/>
                <input type='password' placeholder='password' required/>
            </div>
            <button>{currState==='SignUp'?'Sign Up':'Login'}</button>
            <div className="login-popup-condition">
                <input type='checkbox'/>
                <p>By Continuing,I agree to terms and privacy policy</p>
            </div>
            {currState==='SignUp'?<p>Already have an account?<span onClick={()=>setCurrState('Login')}>Login Here</span></p>:<p>Create a new Account?<span onClick={()=>setCurrState('SignUp')}>Click Here</span></p>}
        </form>

    </div>
  )
}

export default LoginPopup