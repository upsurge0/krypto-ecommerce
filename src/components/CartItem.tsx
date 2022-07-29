import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { CartItem as CartItemType, decreaseQuantity, increaseQuantity, removeItem } from '../redux/cart'

const CartItem = ({id, amount, description, image, quantity, rating, title}: CartItemType) => {
    const dispatch = useDispatch()

    return (
        <div className='flex flex-wrap md:flex-nowrap'>
            <img
                src={image}
                alt={title}
                className='w-28 object-contain mr-4'
            />
            <div className='flex flex-col justify-center w-full'>
                <span className='text-2xl text-gray-600'>
                    {title}
                </span>
                <span>₹ {amount}</span>
                <div className='flex items-center gap-4 flex-wrap'>
                    <div className='flex items-center gap-4'>
                        <AiOutlinePlus className='icon w-6 h-6 hover:text-green-600' onClick={() => dispatch(increaseQuantity(id))}/>
                        {quantity}
                        <AiOutlineMinus className='icon w-6 h-6 hover:text-red-600' onClick={() => dispatch(decreaseQuantity(id))}/>
                    </div>

                    <a
                        href='#'
                        className='w-full text-right underline text-[#007185] text-sm'
                        onClick={() => dispatch(removeItem(id))}
                    >
                        Remove
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CartItem
