import Appbar from '../components/Appbar'
import CartItem from '../components/CartItem'

type Props = {}

const Cart = (props: Props) => {
    return (
        <div className='min-h-screen'>
            <Appbar />
            <div className='flex flex-col md:flex-row px-2 py-3 gap-20 mx-auto w-[80%]'>
                <div className='w-full max-w-[500px]'>
                    <h2 className='text-3xl pb-3'>My Cart</h2>
                    <div className='shadow-md px-4 pt-8 pb-4 rounded-md'>
                        <div className='divide-y-2'>
                            <CartItem />
                            <CartItem />
                        </div>
                    </div>
                </div>
                <div className='w-full max-w-[500px]'>
                    <h2 className='text-3xl pb-3'>Price Details</h2>
                    <div className='shadow-md px-4 pt-8 pb-4 rounded-md h-fit'>
                        <div className='flex flex-col divide-y-2 gap-4'>
                            <div className='flex flex-col'>
                                <div className='flex gap-12'>
                                    <span className='flex-grow'>Price</span>{' '}
                                    <span>2150</span>
                                </div>
                                <div className='flex gap-12'>
                                    <span className='flex-grow'>
                                        Discount Price
                                    </span>{' '}
                                    <span>2150</span>
                                </div>
                                <div className='flex gap-12'>
                                    <span className='flex-grow'>
                                        Delivery Charge
                                    </span>{' '}
                                    <span>2150</span>
                                </div>
                            </div>
                            <div className='flex pt-4 gap-12'>
                                <span className='flex-grow'>Total</span>{' '}
                                <span>2150</span>
                            </div>
                        </div>
                    </div>

                    <button className='px-4 py-3 w-full mt-8 border-2 border-primary bg-primary hover:bg-white transition-colors hover:text-primary text-white text-2xl rounded-md'>Place order</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
