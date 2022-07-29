import Appbar from '../components/Appbar'
import LoginComp from '../components/Login'

type Props = {}

const Register = (props: Props) => {
    return (
        <div className='min-h-screen'>
            <Appbar />
            <LoginComp register />
        </div>
    )
}

export default Register
