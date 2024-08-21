import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Context'

const FoodItem = ({id,name,price,description,image}) => {

    const [itemCount, setItemCount] = useState(0)
    const {cartItems,removeFromCart,addToCart} = useContext(StoreContext)

  return (
    <div className=' w-full m-auto rounded-xl shadow-md p-4 ' >
    <div>
    <img src={image} alt="" className='w-full my-2 rounded-xl mx-auto'/>
    {
        !cartItems[id] || itemCount === 0
        ? <button onClick={() => {addToCart(id); console.log("id is ",cartItems[id]); setItemCount(prev=>prev+1)}} className='bg-blue-500 text-white px-4 py-2 rounded-xl w-full font-bold'>Add to Cart</button> 
        : <div className='bg-blue-500 text-white h-10  rounded-xl w-full font-bold flex justify-between '>
         <button onClick={() => {removeFromCart(id); console.log("id is ",cartItems[id]); setItemCount(prev=>prev-1)}} className=' w-1/3  bg-blue-400 rounded-l-xl '>-</button>
        
       <span className='w-1/3 text-center py-2'> {itemCount} </span>
        <button onClick={() =>{ addToCart(id); console.log("id is ",cartItems[id]); setItemCount(prev=>prev+1)}} className=' w-1/3  bg-blue-400 rounded-r-xl'>+</button>
        </div>
        
    }
    </div>
    

    <div className='flex justify-between items-center my-2'>

    <p className='font-bold'>{name}</p>
    <img src={assets.rating_starts} alt=" "/>
    </div>
    <p className='text-gray-500  '>{description}</p>
    <p className='font-bold text-blue-500 text-xl mx-2'>₹{price}</p>
</div>
  )
}

export default FoodItem
