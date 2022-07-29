import { AiOutlineShoppingCart } from 'react-icons/ai'

type Props = {}

const Appbar = (props: Props) => {
    return (
        <div className='w-full bg-primary h-14'>
            <div className='flex h-full items-center justify-between text-white w-[90%] max-w-[1140px] mx-auto'>
                <h1 className=' text-3xl cursor-poitner'>ShopCart.</h1>
                <div className='flex space-x-4 items-center'>
                    <h4 className='cursor-pointer hoverAnimation'>Products</h4>
                    <h4 className='cursor-pointer hoverAnimation'>Login</h4>
                    <AiOutlineShoppingCart className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Appbar
