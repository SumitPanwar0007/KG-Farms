import  { useState } from 'react'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'

const Products = () => {
    const [category, setCategory] = useState("All")
  return (
    <div className='mx-2'>
      {/* <Header /> */}
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay  category={category}/>
      <AppDownload />
    </div>
  )
}

export default Products
