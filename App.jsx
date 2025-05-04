
import './App.css'
import OrdersManagement from './Components/OrdersManagement'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import ProductsManagement from './Components/ProductsManagement'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  return (
    <>
      <div className='w-[100%] bg-gray-900'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/products" element={<ProductsManagement/>} />
            <Route path="/orders" element={<OrdersManagement/>} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  )
}

export default App
