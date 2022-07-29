import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
            </Routes>
        </BrowserRouter>
    )
}

export default App
