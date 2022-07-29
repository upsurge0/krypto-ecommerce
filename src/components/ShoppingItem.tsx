import { Product } from '../types/product'
import { AiFillHeart } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { addItem } from '../redux/cart'
import { useDispatch } from 'react-redux'
import { SyntheticEvent } from 'react'

const ShoppingItem = ({
    id,
    amount,
    description,
    image,
    rating,
    title,
}: Product) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const addToCart = (e: SyntheticEvent) => {
        e.stopPropagation()
        dispatch(addItem({id, amount, description, image, rating, title}))
    }

    return (
        <div className='flex flex-col max-w-[70vh] md:w-[220px] shadow-md box-border cursor-pointer rounded-md hover:shadow-lg' onClick={() => navigate(`/product/${id}`)}>
            <img src={image} alt={title} className='object-cover h-60' />
            <span className=' truncate pt-3 px-2 min-w-0 max-w-[300px] sm:max-w-[220px]'>
                {title}
            </span>
            <span className='px-2'>₹ {amount}</span>
            <span className='px-2'>
                <div className='px-2 text-sm bg-green-600 text-white w-fit rounded-md'>{rating}</div>
            </span>

            <div className='flex justify-between pt-2 text-gray-500 px-1 pb-1'>
                <AiFillHeart className='icon' />
                <BsCartPlus className='icon' onClick={addToCart}/>
            </div>
        </div>
    )
}

export default ShoppingItem
