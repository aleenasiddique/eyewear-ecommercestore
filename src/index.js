import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Glasses from './pages/Glasses'
import Men from './pages/Men'
import Women from './pages/Women'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'
import ShoppingCart from './pages/ShoppingCart'

function App() {
  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("cart")) || [])

  function addToCart(product){
   setCart([...cart, product])
  }
  const[quantity, setQuantity] = React.useState(JSON.parse(localStorage.getItem("quantity")) || 0)
  const[total, setTotal] = React.useState(JSON.parse(localStorage.getItem("total")) || 0)
  React.useEffect(()=> {
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("quantity", JSON.stringify(quantity))
    localStorage.setItem("total", JSON.stringify(total))
      }, [cart, quantity, total])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout quantity={quantity}/>}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Glasses />} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
      <Route path="about" element={<About />} />
      <Route path="cart" element={<ShoppingCart cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} total={total} setTotal={setTotal}/>} />
      <Route path="shop/:id" element={<ProductDetail cart={cart} addToCart={addToCart} quantity={quantity} setQuantity={setQuantity}/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
