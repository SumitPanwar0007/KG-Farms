import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='container sm:mx-4 my-auto justify-center items-center  flex flex-col'>
      <p className='text-3xl font-base'>For better Experience download <br/> KG Farms App</p>
      <div className='flex gap-4 my-4'>
        <img src={assets.play_store} alt="" className='w-1/2 cursor-pointer transition-all hover:scale-105'/>
        <img src={assets.app_store} alt= "" className='w-1/2 cursor-pointer transition-all hover:scale-105'/>
      </div>
    </div>
  )
}

export default AppDownload
