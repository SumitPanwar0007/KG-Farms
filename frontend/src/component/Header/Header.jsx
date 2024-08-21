
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className=" sm:mx-4 my-auto  ">
    <img src={assets.header_img} alt="logo" className='w-full object-cover no-repeat  bg-cover' />
      <div className=' absolute z-10 flex items-start flex-col gap-2 bottom-2 sm:bottom-10 left-4 sm:left-16 '>
        <h2 className=' sm:text-6xl font-bold text-white text-t'>Get Fresh <br/> <span className='text-blue-500 sm:text-8xl'> Milk Daily</span></h2>
        <p className='W-1/2 text-lg text-white text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500'>
        Freshness Delivered Daily, Right to Your Doorstep!
        </p>
        <button className='text-xs sm:text-2xl text-white bg-blue-500 px-2 sm:px-4 py-2 rounded-3xl '>Get Subcripiton</button>
      </div>
    </div>
  )
}

export default Header
