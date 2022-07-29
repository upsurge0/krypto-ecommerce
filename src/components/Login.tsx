interface Props {
    register?: boolean
}

const Login = ({ register }: Props) => {
    return (
        <div className='flex items-center justify-center h-[90vh]'>
            <div className='flex flex-col shadow-md px-10 py-5 space-y-4 w-full max-w-[400px]'>
                <h1 className='text-3xl font-medium'>
                    {register ? 'Register' : 'Login'}
                </h1>
                <input
                    type='email'
                    className='outline-none bg-[#f2f5f9] rounded-full pl-3 py-2'
                    placeholder='Email'
                />
                <input
                    type='password'
                    className='outline-none bg-[#f2f5f9] rounded-full pl-3 py-2'
                    placeholder='Password'
                />
                {register && (
                    <input
                        type='password'
                        className='outline-none bg-[#f2f5f9] rounded-full pl-3 py-2'
                        placeholder='Confirm Password'
                    />
                )}
                <div className='flex flex-col space-y-2'>
                    <button className='bg-primary text-white rounded-full py-2 hover:bg-blue-500'>
                        {register ? 'Register' : 'Login'}
                    </button>
                    <span>
                        {register ? 'Already have an account?' : 'New user?'}
                        <span className='text-primary cursor-pointer pl-2 hover:underline'>
                            {register ? 'Log In' : 'Create an Account'}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login
