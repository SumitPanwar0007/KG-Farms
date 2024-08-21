
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
const navbar = ({showLoginPopup,setShowLoginPopup}) => {

  return (
    <div className='p-[2px] sm:flex justify-between '>
    <Link to="/">

    <img src={assets.logo} alt="logo" className='w-20 -p-4' />
    </Link>
    <ul className='sm:flex justify-between gap-4 font-medium text-[24px] text-gray-500'>
      <li className='cursor-pointer hover:border-b-2  hover:text-blue-500   ' onClick={() => window.location.href = "/"} >Home</li>
      {/* <li className='cursor-pointer hover:border-b-2  hover:text-red-500   ' onClick={() => window.location.href = "/order"}>Order now</li> */}

      <li className='cursor-pointer hover:border-b-2  hover:text-blue-500 ' onClick={() => window.location.href = "/products"} >Products</li>
      <li className='cursor-pointer hover:border-b-2  hover:text-blue-500 ' onClick={()=> window.location.href="/"}>Moible app</li>
      <li className='cursor-pointer hover:border-b-2  hover:text-blue-500 ' onClick={()=> window.location.href="/about"}>Contact us</li>

    </ul>
       <div className='sm:flex gap-4 '>
        <img src={assets.search_icon} alt="search" className='cursor-pointer w-8 h-8' />
        <div>
        <Link to="/cart">
          <img src={assets.basket_icon} alt="" className='cursor-pointer  py-2 w-auto' />
         </Link>
          <div className='w-4 h-4 position:absolute top-[-8px] right-[-8px] bg-red-500 rounded-full '></div>
        </div>
        <button className='cursor-pointer px-4  border-2 radius-2xl font-[18px] bg-transparent text-red-500 rounded-3xl'
        onClick={()=>setShowLoginPopup(true)}>Sign in</button>
       </div>

    </div>
  )
}

export default navbar
