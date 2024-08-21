import React from 'react'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='mx-4'>
      <h1 className='py-4 text-5xl font-bold m-2'>Explore our <span className='text-blue-500'>Menu</span></h1>
      <p className='py-4 text-lg'>Get your daily fresh milk choose from a diverse menu featuring a delectable array of dishes crafted with love

      </p>
      <div className='flex justify-between text-center  py-2 gap-4 h-auto '>
        {
            menu_list.map((item,index) => {
                return(
                    <div onClick={() => setCategory(
                      prev=>prev===item.menu_name 
                      ? "All" 
                      : item.menu_name)} key={index} className='flex flex-col gap-2'>
                        <img src={item.menu_image} alt="" 
                        className={ category===item.menu_name 
                        ? "min-w-10 transition-all cursor-pointer border-blue-600 border-2 rounded-full" 
                        : " min-w-10 rounded-2xl transition-all cursor-pointer"}  />
                        <p className='text-gray-600 border-none font-bold '>{item.menu_name}</p>
                        
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default ExploreMenu
