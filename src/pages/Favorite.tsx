import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Appbar from '../components/Appbar'
import ShoppingItem from '../components/ShoppingItem'
import { RootState } from '../redux/store'
import { FavouriteData } from '../types/serverData'
import axiosInstance from '../utils/axiosConfig'

const Favourite = () => {
    const [favourites, setFavourites] = useState<FavouriteData[]>([])
    const user = useSelector((state: RootState) => state.user)
    const userFavourites = favourites.filter((fav) => fav.userId === user.id)

    useEffect(() => {
        axiosInstance.get('/favourites').then((res) => {
            setFavourites(res.data)
        })
    }, [])

    useEffect(() => {
        console.log(favourites)
    }, [favourites])
    return (
        <div className='min-h-screen overflow-hidden'>
            <Appbar />
            <span className='text-3xl pl-10 py-5'>Favourites</span>

            {userFavourites.length > 0 ? (
                <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 w-[80%] mx-auto gap-x-16 gap-y-4 py-3'>
                    {userFavourites.map((favourite) => (
                        <ShoppingItem {...favourite.item} />
                    ))}
                </div>
            ) : (
                <h4>You have no items in favourites</h4>
            )}
        </div>
    )
}

export default Favourite
