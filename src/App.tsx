import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Favourite from './pages/Favorite'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductPage from './pages/Product'
import Register from './pages/Register'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/favourite' element={<Favourite />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
