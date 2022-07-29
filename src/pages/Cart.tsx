import { useEffect, useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Appbar from '../components/Appbar'
import CartItem from '../components/CartItem'
import Modal from '../components/Modal'
import { RootState } from '../redux/store'
import axiosInstance from '../utils/axiosConfig'

type Props = {}

const Cart = (props: Props) => {
    const items = useSelector((state: RootState) => state.cart.items)
    const user = useSelector((state: RootState) => state.user)
    const navigate = useNavigate()
    const [price, setPrice] = useState<number>(0)
    const deliveryCharge = 100
    const discount = 0
    const [showModal, setShowModal] = useState(false)

    const placeOrder = () => {
        if (user.isLoggedIn) {
            axiosInstance.post('/orders', {
                items: items,
                userId: user.id,
                total: price + deliveryCharge - discount
            })
            setShowModal(true)
        }
        else navigate('/login')
    }

    useEffect(() => {
        let sum = 0
        items.forEach((item) => {
            sum += +item.amount * item.quantity
        })
        setPrice(sum)
    }, [items])

    return (
        <div className='min-h-screen'>
            <Appbar />
            <div className='flex flex-col md:flex-row px-2 py-3 gap-20 mx-auto w-[80%]'>
                <div className='w-full max-w-[500px]'>
                    <h2 className='text-3xl pb-3'>My Cart</h2>
                    <div className='shadow-md px-4 pt-8 pb-4 rounded-md'>
                        <div className='divide-y-2 space-y-4'>
                            {items.length > 0 ? (
                                items.map((item) => (
                                    <CartItem key={item.id} {...item} />
                                ))
                            ) : (
                                <h4>You don't have any items in your cart.</h4>
                            )}
                        </div>
                    </div>
                </div>
                {items.length > 0 && (
                    <div className='w-full max-w-[500px]'>
                        <h2 className='text-3xl pb-3'>Price Details</h2>
                        <div className='shadow-md px-4 pt-8 pb-4 rounded-md h-fit'>
                            <div className='flex flex-col divide-y-2 gap-4'>
                                <div className='flex flex-col'>
                                    <div className='flex gap-12'>
                                        <span className='flex-grow'>Price</span>{' '}
                                        <span>{price}</span>
                                    </div>
                                    <div className='flex gap-12'>
                                        <span className='flex-grow'>
                                            Discount Price
                                        </span>{' '}
                                        <span>{discount}</span>
                                    </div>
                                    <div className='flex gap-12'>
                                        <span className='flex-grow'>
                                            Delivery Charge
                                        </span>{' '}
                                        <span>100</span>
                                    </div>
                                </div>
                                <div className='flex pt-4 gap-12'>
                                    <span className='flex-grow'>Total</span>{' '}
                                    <span>₹ {price + deliveryCharge - discount}</span>
                                </div>
                            </div>
                        </div>

                        <button
                            className='px-4 py-3 w-full mt-8 border-2 border-primary bg-primary hover:bg-white transition-colors hover:text-primary text-white text-2xl rounded-md'
                            onClick={placeOrder}
                        >
                            Place order
                        </button>
                    </div>
                )}
            </div>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <div className='text-xl flex items-center gap-2'>
                    <BsCheck2Circle className='text-green-500 text-2xl'/>
                    <span>Successfully placed order</span>
                </div>
            </Modal>
        </div>
    )
}

export default Cart
