import { Product } from '../types/product'
import { AiFillHeart } from 'react-icons/ai'
import { BsCartPlus, BsCheck, BsCheck2Circle, BsXCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { addItem } from '../redux/cart'
import { useDispatch, useSelector } from 'react-redux'
import { SyntheticEvent, useState } from 'react'
import Modal from './Modal'
import { RootState } from '../redux/store'
import { addFavourite, FavouriteState, setError } from '../redux/favourite'
import axiosInstance from '../utils/axiosConfig'
import { FavouriteData } from '../types/serverData'

const ShoppingItem = ({
    id,
    amount,
    description,
    image,
    rating,
    title,
}: Product) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [event, setEvent] = useState<'cart' | 'favourites'>()
    const cartError = useSelector((state: RootState) => state.cart.error)
    const favouriteError = useSelector(
        (state: RootState) => state.favourite.error
    )
    const userId = useSelector((state: RootState) => state.user.id)

    const addToCart = (e: SyntheticEvent) => {
        e.stopPropagation()
        dispatch(addItem({ id, amount, description, image, rating, title }))
        setEvent('cart')
        setShowModal(true)
    }

    const addToFavourites = async (e: SyntheticEvent) => {
        e.stopPropagation()
        const item = { id, amount, description, image, rating, title }
        if (userId) {
            try {
                const res = await axiosInstance.get('/favourites')
                const fav = (res.data as FavouriteData[]).find(
                    (fav) => fav.item.id === id
                )
                if (!fav) {
                    dispatch(addFavourite(item))
                    axiosInstance.post('/favourites', {
                        item,
                        userId,
                    })
                } else {
                    dispatch(setError('Item already added to favourites'))
                }
                setEvent('favourites')
                setShowModal(true)
            } catch (error) {}
        } else {
            navigate('/login')
        }
    }

    return (
        <div
            className='flex flex-col max-w-[70vh] md:w-[220px] shadow-md box-border cursor-pointer rounded-md hover:shadow-lg'
            onClick={() => navigate(`/product/${id}`)}
        >
            <img src={image} alt={title} className='object-cover h-60' />
            <span className=' truncate pt-3 px-2 min-w-0 max-w-[300px] sm:max-w-[220px]'>
                {title}
            </span>
            <span className='px-2'>₹ {amount}</span>
            <span className='px-2'>
                <div className='px-2 text-sm bg-green-600 text-white w-fit rounded-md'>
                    {rating}
                </div>
            </span>

            <div className='flex justify-between pt-2 text-gray-500 px-1 pb-1'>
                <AiFillHeart className='icon' onClick={addToFavourites} />
                <BsCartPlus className='icon' onClick={addToCart} />
            </div>
            <Modal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false)
                    dispatch(setError(null))
                }}
            >
                <div className='text-xl flex items-center gap-2'>
                    {cartError || favouriteError ? (
                        <>
                            <BsXCircle className='text-red-500 text-2xl' />
                            <span>{cartError ?? favouriteError}</span>
                        </>
                    ) : (
                        <>
                            <BsCheck2Circle className='text-green-500 text-2xl' />
                            <span>{`Successfully added item to ${event}`}</span>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    )
}

export default ShoppingItem
