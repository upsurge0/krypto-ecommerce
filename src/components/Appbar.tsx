import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillHeartFill, BsHeartFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from '../redux/store'
import { logout } from '../redux/user'

type Props = {}

const Appbar = (props: Props) => {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
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
                <h1
                    className=' text-3xl cursor-pointer'
                    onClick={() => navigate('/')}
                >
                    ShopCart.
                </h1>
                <div className='flex space-x-4 items-center'>
                    <h4
                        className='cursor-pointer hoverAnimation'
                        onClick={() => navigate('/')}
                    >
                        Products
                    </h4>
                    <h4
                        className='cursor-pointer hoverAnimation'
                        onClick={handleClick}
                    >
                        {isLoggedIn ? 'Log out' : 'Login'}
                    </h4>
                    {isLoggedIn && (
                        <Link to='/favourite'>
                            <AiFillHeart className='icon hover:bg-blue-500' />
                        </Link>
                    )}
                    <Link to='/cart'>
                        <AiOutlineShoppingCart className='icon hover:bg-blue-500' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Appbar
