import { Product } from '../types/product'
import { AiFillHeart } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'

const ShoppingItem = ({
    id,
    amount,
    description,
    image,
    rating,
    title,
}: Product) => {
    return (
        <div className='flex flex-col max-w-[70vh] md:w-[220px] shadow-md box-border cursor-pointer rounded-md hover:shadow-lg'>
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
                <BsCartPlus className='icon' />
            </div>
        </div>
    )
}

export default ShoppingItem
