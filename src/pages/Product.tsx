import { SyntheticEvent, useEffect, useState } from 'react'
import { BsXCircle, BsCheck2Circle } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Appbar from '../components/Appbar'
import Modal from '../components/Modal'
import { addItem } from '../redux/cart'
import { RootState } from '../redux/store'
import { Product } from '../types/product'
import axiosInstance from '../utils/axiosConfig'

const ProductPage = () => {
    const [product, setProduct] = useState<Product>()
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const cartError = useSelector((state: RootState) => state.cart.error)

    useEffect(() => {
        axiosInstance.get(`/products/${id}`).then((res) => {
            setProduct(res.data)
        })
    }, [])

    const addToCart = (e: SyntheticEvent) => {
        e.stopPropagation()
        if (product) dispatch(addItem(product))
        setShowModal(true)
    }

    return (
        <div>
            <Appbar />
            <div className='flex flex-col md:flex-row md:items-center lg:justify-between h-screen max-w-[80%] mx-auto gap-10'>
                <div className='w-full lg:max-w-[50vh] object-cover'>
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className='w-full min-w-[300px]'
                    />
                </div>
                <div className='flex flex-col max-w-[600px]'>
                    <span className='text-3xl font-bold max-w-md text-[#141414]'>
                        {product?.title}
                    </span>
                    <span className='pt-5'>{product?.description}</span>
                    <span className='text-2xl pt-8'>₹ {product?.amount}</span>
                    <div className='flex gap-12 py-10 md:pt-32'>
                        <button
                            type='submit'
                            className='px-4 py-3 w-52 border-2 border-primary bg-primary hover:bg-white transition-colors hover:text-primary text-white text-2xl rounded-md'
                            onClick={(e) => {
                                addToCart(e)
                                navigate('/cart')
                            }}
                        >
                            BUY NOW
                        </button>
                        <button
                            type='submit'
                            className='px-4 py-3 w-52 border-2 border-primary text-primary hover:bg-primary transition-colors hover:text-white text-2xl rounded-md'
                            onClick={addToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <div className='text-xl flex items-center gap-2'>
                        {cartError ? (
                            <>
                                <BsXCircle className='text-red-500 text-2xl' />
                                <span>{cartError}</span>
                            </>
                        ) : (
                            <>
                                <BsCheck2Circle className='text-green-500 text-2xl' />
                                <span>{`Successfully added item to cart`}</span>
                            </>
                        )}
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default ProductPage
