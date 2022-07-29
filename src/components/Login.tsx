import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosConfig'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { loginOrRegister } from '../redux/user'
import { Root } from 'postcss'

interface Props {
    register?: boolean
}

const Login = ({ register }: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn)
    const dispatch = useDispatch()

    const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault()
        if (register) {
            if (password !== confirmPassword) {
                setError('Passwords do not match')
                return
            }
            try {
                const res = await axiosInstance.post('/register', {
                    email,
                    password,
                })
                navigate('/')
                dispatch(loginOrRegister(res.data))
            } catch (error: unknown) {
                setError(error.response.data)
                return
            }
        } else {
            try {
                const res = await axiosInstance.post('/login', {
                    email,
                    password,
                })
                if(res.status === 400) {
                    throw Error("Incorrect Password")
                }
                navigate('/')
                dispatch(loginOrRegister(res.data))
            } catch (error: unknown) {
                setError(error.response.data)
                return
            }
        }
        setError('')
    }

    useEffect(() => {
        console.log({ email, password, confirmPassword })
    }, [email, password, confirmPassword])
    return (
        <div className='flex items-center justify-center h-[90vh]'>
            <form
                className='flex flex-col shadow-md px-10 py-5 space-y-4 w-full max-w-[400px]'
                onSubmit={handleSubmit}
            >
                <h1 className='text-3xl font-medium'>
                    {register ? 'Register' : 'Login'}
                </h1>
                <input
                    type='email'
                    className='outline-none bg-[#f2f5f9] rounded-full pl-3 py-2'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    className='outline-none bg-[#f2f5f9] rounded-full pl-3 py-2'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {register && (
                    <input
                        type='password'
                        className='outline-none bg-[#f2f5f9] rounded-full pl-3 py-2'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                )}
                <div className='flex flex-col space-y-2'>
                    <button className='bg-primary text-white rounded-full py-2 hover:bg-blue-500'>
                        {register ? 'Register' : 'Login'}
                    </button>
                    <span>
                        {register ? 'Already have an account?' : 'New user?'}
                        <Link to={register ? '/login' : '/register'} className='text-primary cursor-pointer pl-2 hover:underline'>
                            {register ? 'Log In' : 'Create an Account'}
                        </Link>
                        {error !== '' && (
                            <div className='text-red-500'>{error}</div>
                        )}
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Login
