import { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import LoginComp from '../components/Login'
import ShoppingItem from '../components/ShoppingItem'
import { Product } from '../types/product'
import axiosInstance from '../utils/axiosConfig'

const Favourite = (props: Props) => {
    const [favourites, setFavourites] = useState<Product[]>([])

    useEffect(() => {
        axiosInstance.get('/favourites').then((res) => {
            // @ts-ignore
            const items = (res.data as []).map((i) => i.item)
            setFavourites(items)
        })
    }, [])

    useEffect(() => {
        console.log(favourites)
    }, [favourites])
    return (
        <div className='min-h-screen overflow-hidden'>
            <Appbar />
            <span className='text-3xl pl-10 py-5'>Favourites</span>
            <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 w-[80%] mx-auto gap-x-16 gap-y-4 py-3'>
                {favourites.map((favourite) => (
                    <ShoppingItem {...favourite} />
                ))}
            </div>
        </div>
    )
}

export default Favourite
