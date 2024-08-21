import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Sign up")
  return (
    <div className='fixed z-50 inset-0 flex items-center justify-center bg-black/60'>
     <form className='w-1/3 h-2/3 p-6 bg-white/80 rounded-lg items-center justify-center'>
        <div className='flex justify-between'>
            <h2 className='text-2xl  font-semibold'>{currState}</h2>
            <img src={assets.cross_icon} alt="" 
                onClick={()=>setShowLogin(false)}
              className=''
            />
        </div>
        <div className='flex flex-col gap-6 my-4'>
            {currState==="Login"?<></>:
                <input type='text' placeholder='Name' className=' rounded-lg text-lg text-center'/>
            }
            <input type="text" placeholder='Email' className=' rounded-lg text-lg text-center'/>
            <input type="password" placeholder='Password' className=' rounded-lg text-lg text-center' />
        </div>
        <button className='bg-blue-500 px-4 py-2 my-4 w-full mx-auto rounded-3xl '>
        {currState==="Sign up"?"Create Account":"Login"}  Sign up</button>
        <div className='flex gap-4'>
        <input type='checkbox' required/>
            <p className='text-gray-700'>you agree to our <a href="">Terms</a> and <a href="">Privacy Policy</a></p>
        </div>
        {
            currState==="Login"
            ? <p className='text-center text-sm text-gray-700 py-4'>Create a new account ?  <span onClick={() => setCurrState("Sign up")} className='cursor-pointer text-blue-500 hover:text-blue-800'>Click here</span> </p>
            : <p className='text-center text-sm text-gray-700'>Already have an account ?  <span onClick={()=>setCurrState("Login")} className='cursor-pointer text-blue-500 hover:text-blue-800'>Click here</span> </p>
        }
     </form>
    </div>
  )
}

export default LoginPopup
