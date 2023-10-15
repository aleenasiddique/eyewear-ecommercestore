import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRemove} from "@fortawesome/free-solid-svg-icons"


export default function ShoppingCart({cart, setCart,quantity,setQuantity, total, setTotal}){
    const navigate=useNavigate()
    function handleRemove(id, quantity){
    const updatedProducts = cart.filter(product => product.id != id)
    setCart(updatedProducts)
    setQuantity(prevQuantity => prevQuantity - quantity)
    }   

     
     const cartProducts = cart?.map(product => (
        <div className="flex mt-12 text-sm md:text-base md:ml-[200px] ml-8">
            <div className="flex gap-2 basis-2/5">
                <img src={product.imageUrl} alt={product.name} className="h-8 w-8 rounded-[16px] border border-purple-300"/>
                <div className="flex flex-col">
            <p className="font-bold">{product.name}</p>
            <p>${product.price}</p>
            </div>
            </div>
            <p className="font-bold basis-1/5">{product.quantity}</p>
            <p className=" basis-1/5">${product.price * product.quantity}</p>
            <div className=" basis-1/5"><div className="h-5 w-5 rounded-[10px] bg-black text-white flex justify-center items-center" onClick={()=>handleRemove(product.id, product.quantity)}><FontAwesomeIcon icon={faRemove}/></div></div>
        </div>
     ))

     setTotal((cart.reduce((total, product)=> total + (product.quantity * product.price), 0)))
  

   
     return (
        <div className="my-8">
  { cartProducts.length > 0 && <div>
    <div className="h-16 bg-purple-100 text-3xl font-bold flex justify-between items-center px-6 md:px-[50px]"><h2>Cart</h2>
    <div className="h-8 w-8 rounded-[16px] border border-black flex justify-center items-center"><NavLink to="#" onClick={()=> navigate(-1)}><FontAwesomeIcon icon={faRemove} /></NavLink></div>
    </div>
    <div className="mb-16">{cartProducts}</div>
    <hr />
    <div className="flex justify-end mr-12 md:mr-[150px]">
    <div className="flex flex-col mt-12 md:mt-16 w-[300px] items-center gap-3">
    <p className="font-bold text-2xl">Total: ${total}</p>
    <button className="px-10 py-2 border border-black font-semibold text-lg hover:bg-black hover:text-white transition-colors ease-in-out duration-300">Proceed to Checkout</button>
    </div>
    </div>
    </div>
  }
  {cartProducts.length === 0 && 
  <div className="flex flex-col my-16 md:my-[200px] items-center gap-4 md:gap-8">
  <p className="text-2xl md:text-5xl font-bold">Cart is Empty!</p>
  <NavLink to="/shop"className="py-1 md:py-2 px-8 md:px-10 md:text-xl border border-black hover:bg-black hover:text-white transition-colors ease-in-out duration-300">Browse Products</NavLink>
  </div>
  }
            </div>
    )
}