import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../redux/store'
import { logout } from '../redux/user'

type Props = {}

const Appbar = (props: Props) => {
    const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        if (isLoggedIn) {
            dispatch(logout({}))
        }
        navigate('/login')
    }
    return (
        <div className='w-full bg-primary h-14'>
            <div className='flex h-full items-center justify-between text-white w-[90%] max-w-[1140px] mx-auto'>
                <h1 className=' text-3xl cursor-poitner'>ShopCart.</h1>
                <div className='flex space-x-4 items-center'>
                    <h4 className='cursor-pointer hoverAnimation'>Products</h4>
                    <h4
                        className='cursor-pointer hoverAnimation'
                        onClick={handleClick}
                    >
                        {isLoggedIn ? 'Log out' : 'Login'}
                    </h4>
                    <AiOutlineShoppingCart className='icon hover:bg-blue-500' />
                </div>
            </div>
        </div>
    )
}

export default Appbar
