import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type Props = {}

const CartItem = (props: Props) => {
    return (
        <div className='flex flex-wrap md:flex-nowrap'>
            <img
                src='https://i.pinimg.com/originals/25/0d/a3/250da32c889b624849bf828ae2ece420.jpg'
                alt=''
                className='w-28 object-contain'
            />
            <div className='flex flex-col justify-center w-full'>
                <span className='text-2xl text-gray-600'>
                    T-shirt for formal men
                </span>
                <span>₹ {'400'}</span>
                <div className='flex items-center gap-4 flex-wrap'>
                    <div className='flex items-center gap-4'>
                        <AiOutlinePlus className='icon w-6 h-6 hover:text-green-600' />
                        {'4'}
                        <AiOutlineMinus className='icon w-6 h-6 hover:text-red-600' />
                    </div>

                    <a
                        href='#'
                        className='w-full text-right underline text-[#007185] text-sm'
                    >
                        Remove
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CartItem
