import Appbar from '../components/Appbar'
import LoginComp from '../components/Login'

type Props = {}

const Login = (props: Props) => {
    
    return (
        <div className='min-h-screen'>
            <Appbar />
            <LoginComp />
        </div>
    )
}

export default Login
