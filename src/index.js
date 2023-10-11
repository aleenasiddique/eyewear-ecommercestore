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

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Glasses />} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
      <Route path="about" element={<About />} />
      <Route path="cart" element={<ShoppingCart />} />
      <Route path="shop/:id" element={<ProductDetail />} />
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


