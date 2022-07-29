import { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import LoginComp from '../components/Login'
import ShoppingItem from '../components/ShoppingItem'
import { Product } from '../types/product'
import axiosInstance from '../utils/axiosConfig'

type Props = {}

const Home = (props: Props) => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        axiosInstance.get('/products').then((res) => {
            setProducts(res.data)
        })
    }, [])

    useEffect(() => {
        console.log(products)
    }, [products])
    return (
        <div className='min-h-screen overflow-hidden'>
            <Appbar />
            <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 w-[80%] mx-auto gap-x-16 gap-y-4 py-3'>
                {products.map((product) => (
                    <ShoppingItem {...product} />
                ))}
            </div>
        </div>
    )
}

export default Home
