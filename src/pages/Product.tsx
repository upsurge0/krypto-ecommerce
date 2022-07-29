import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Product } from '../types/product'
import axiosInstance from '../utils/axiosConfig'

const ProductPage = () => {
    const [product, setProduct] = useState<Product>()
    const { id } = useParams()
    useEffect(() => {
        axiosInstance.get(`/products/${id}`).then((res) => {
            setProduct(res.data)
        })
    }, [])
    return (
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
                    >
                        BUY NOW
                    </button>
                    <button
                        type='submit'
                        className='px-4 py-3 w-52 border-2 border-primary text-primary hover:bg-primary transition-colors hover:text-white text-2xl rounded-md'
                    >
                        Add to Basket
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
