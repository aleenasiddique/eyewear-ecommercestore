import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRemove} from "@fortawesome/free-solid-svg-icons"
import cartImage from "../assets/images/cart.png"


export default function ShoppingCart({cart, setCart, setQuantity, total, setTotal}){
    const navigate=useNavigate()
    function handleRemove(id, quantity){
    const updatedProducts = cart.filter(product => product.id !== id)
    setCart(updatedProducts)
    setQuantity(prevQuantity => prevQuantity - quantity)
    }   

     
     const cartProducts = cart?.map(product => (
        <div className="flex mt-12 text-sm md:text-base md:ml-[200px] ml-8">
            <div className="flex gap-2 basis-2/5">
                <img src={product.imageUrl} alt={product.name} className="h-8 w-8 rounded-[16px] border border-purple-300"/>
                <div className="flex flex-col">
            <p className="font-bold text-dark-green md:text-lg">{product.name}</p>
            <p>${product.price}</p>
            </div>
            </div>
            <p className=" basis-1/5">{product.quantity}</p>
            <p className=" basis-1/5">${product.price * product.quantity}</p>
            <div className=" basis-1/5"><div className="h-5 w-5 rounded-[10px] bg-dark-green text-zinc-100 flex justify-center items-center" onClick={()=>handleRemove(product.id, product.quantity)}><FontAwesomeIcon icon={faRemove}/></div></div>
        </div>
     ))

     setTotal((cart.reduce((total, product)=> total + (product.quantity * product.price), 0)))
  

   
     return (
        <div className="my-8 md:my-12">
  { cartProducts.length > 0 && <div>
    <div className="absolute right-12 md:right-32 top-28 text-5xl text-dark-green transform hover:scale-110 transition-transform duration-300 mb-32"><NavLink to="#" onClick={()=> navigate(-1)}><FontAwesomeIcon icon={faRemove} /></NavLink></div>

    <div className="mt-32 md:mt-40 mb-8">{cartProducts}</div>
    <hr />
    <div className="flex justify-end mr-12 md:mr-[150px]">
    <div className="flex flex-col mt-12 md:mt-16 w-[300px] items-center gap-3">
    <p className="font-bold text-2xl text-dark-green mb-2">Total: ${total}</p>
    <button className="px-8 md:px-10 py-3 bg-dark-green shadow-md shadow-dark-green hover:bg-teal-900 text-zinc-100 font-semibold transition-colors ease-in-out duration-300">Proceed to Checkout</button>
    </div>
    </div>
    </div>
  }
  {cartProducts.length === 0 && 
  <div className="flex flex-col my-16 md:my-[200px] items-center gap-4">
  <img className="h-40 w-60"src={cartImage} alt="cart" />
  <p className="text-2xl  font-extrabold text-dark-green italic tracking-wide">Cart is Empty!</p>
  <NavLink to="/shop"className="py-3 px-8 md:px-10 md:text-xl bg-dark-green shadow-md shadow-teal-900 hover:bg-teal-900 text-zinc-100 font-semibold transition-colors ease-in-out duration-300">Browse Products</NavLink>
  </div>
  }
            </div>
    )
}