import React from "react"
import { NavLink, useParams, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import productData from "../data.js"
export default function ProductDetail (){
    const [itemsCount, setItemsCount] = React.useState(0)
    function addCount({}){  
        if( itemsCount < 20){
     setItemsCount(prevCount =>prevCount + 1)}
    }
    function minusCount(){
        if(itemsCount > 0 ){
        setItemsCount(prevCount =>prevCount - 1)}
       }
    const {id} = useParams()
    const collection = productData.data.product
    const product = collection.find(product => product.id === id)
     const navigate= useNavigate()

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
          <div className="flex border border-zinc-300 items-center justify-between w-[130px] text-2xl">
            <button className="pl-3 hover:font-bold" onClick={minusCount}>-</button>
            <p className=" border-x border-zinc-300 px-6 py-0">{itemsCount}</p>
            <button className="pr-3 hover:font-bold" onClick={addCount}>+</button>
            </div>

          <NavLink to="." className="py-2 w-[150px] text-center border border-black hover:bg-black hover:text-white mt-2">Add to Cart</NavLink>
            </div> 
       </div>
       </div>
       </div>
    )     
            
}