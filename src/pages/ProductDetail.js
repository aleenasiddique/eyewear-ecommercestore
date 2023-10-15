import React from "react"
import { NavLink, useParams, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import productData from "../data.js"
export default function ProductDetail ({cart, addToCart, quantity, setQuantity}){
  const[count, setCount] = React.useState(1)
    const {id} = useParams()
    const collection = productData.data.product
    const product = collection.find(product => product.id === id)
     const navigate= useNavigate()
      
     function handleAddToCart(){
      addToCart(product)
      product.quantity = count
      setQuantity(prevQuantity => prevQuantity + count )
     }
     console.log(quantity)
       function addQuantity(){
        if(count < 20 ){
          setCount(prevCount => prevCount + 1 )
        }
       }
       function subtractQuantity(){
        if(count > 0 ){
          setCount(prevCount => prevCount - 1 )
        }
       }
    return (
        <div>
        <div className="my-[100px] mx-12 md:mx-[100px]">
        <NavLink to="#" onClick={() => navigate(-1)} className="flex items-center gap-2"> 
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="black text-3xl align-bottom"/>
        <span className="text-lg hover:underline underline-offset-2 font-semibold">Back to Product Page</span>
        </NavLink>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 mt-16">
          <img src={product.imageUrl} className="h-[360px] md:h-[550px] w-[330px] md:w-[450px] object-cover rounded-lg" alt={product.name} />
          <div className="flex flex-col gap-1 w-[330px] md:w-[500px]">
            <p className="md:text-lg md:leading-8">Elevate your style with our meticulously crafted eyewear collection, designed for both men and women with discerning tastes. Discover unparalleled 
                comfort and timeless elegance in every pair. Our glasses blend fashion and function seamlessly, featuring high-quality materials and expert craftsmanship.
                 Whether you're looking for a sophisticated look for formal occasions or a chic everyday accessory, our diverse range offers something for everyone.
                  Explore our eyewear selection and find the perfect pair that complements your individuality and leaves a lasting impression.</p>
                  <p className="text-xl font-bold">{product.name}</p>
                  <p className="text-xl italic">{product.type}'s Eyewear</p>
                  <p className="text-lg font-bold">${product.price}</p>
                 <i> <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
          </i>
          <div className="flex justify-evenly items-center w-[150px] border border-zinc-400 font-2xl mt-2 font-bold">
           <button className="border-r border-zinc-400 pr-4 py-1" onClick={addQuantity}>+</button>
            < div className="py-1">{count}</div>
           <button className="border-l border-zinc-400 pl-4 py-1" onClick={subtractQuantity}>-</button>
          </div>
          <NavLink to="/cart" className="py-2 w-[150px] text-center border border-black hover:bg-black hover:text-white mt-2 transition-colors ease-in-out duration-300" onClick={handleAddToCart} >Add to Cart</NavLink>
            </div> 
       </div>
       </div>
       
       </div>
    )     
            
}