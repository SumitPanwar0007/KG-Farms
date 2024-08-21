import  { useContext } from 'react'
import { StoreContext } from '../../context/Context'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='my-4'>
    <h2 className='text-4xl font-bold'>Top <span className='text-blue-500'>Products</span> Products for you</h2>
    <p className='py-4 text-lg '>Get your daily fresh milk choose from a diverse menu featuring a delectable array of dishes crafted with love</p>
    <div className='grid sm:grid-cols-3 gap-4 '>
        {food_list.map((item,index) => {
            if(category === "All" || category === item.category){

            return <FoodItem key={index} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image}/>
            }
            
        })}
    </div>
    </div>
  )
}

export default FoodDisplay
