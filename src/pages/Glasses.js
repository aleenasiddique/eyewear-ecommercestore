import productData from "../data.js"
import { Link } from "react-router-dom"
import {motion, easeInOut } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


export default function Shop(){

    const fadeoutVariants = {
        initial : {
          translateY: -20, 
          opacity: 0
        }, 
        animate: {
          translateY: 0, 
          opacity: 1, 
          transition : {
            duration: 0.9, 
            staggerChildren: 0.7,
            ease: easeInOut,
          },
        },
      } 

    const collection = productData.data.product
    const product = collection.map(product =>(
       
        <div key={product.id} className="flex flex-col items-center gap-1 border-b border-purple-200 md:border-none pb-8">
            <Link to={`/shop/${product.id}`}>
            <img className="w-[350px] h-[380px] object-cover" src={product.imageUrl} alt={product.name}/>
            <p className="text-xl font-extrabold mt-3 text-dark-green">{product.name}</p>
            <p className="text-xl italic">{product.type}'s Eyewear</p>
            <p className=" font-extrabold text-dark-green"> ${product.price}</p>
            <i>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
          </i>
          </Link>
        </div>
    ))
    return(
        <div>
            <motion.div variants = {fadeoutVariants} initial ="initial" whileInView="animate" viewport={{ once: true }} 
            className="h-40 w-full bg-gradient-to-r from-green via-pink to-green px-8 md:px-16 flex flex-col  justify-center text-dark-green border-t border-white/30">
                <motion.p variants={fadeoutVariants} className="text-4xl font-extrabold italic tracking-wide">SHOP</motion.p>
                <motion.p variants={fadeoutVariants} className="font-semibold ">Home / Shop</motion.p>
            </motion.div>
            < motion.p variants = {fadeoutVariants} initial ="initial" whileInView="animate" viewport={{ once: true }} 
            className="font-font-weather font-extrabold text-dark-green text-center text-3xl md:text-5xl italic mt-16 md:mt-24">Shop Our Versatile Collection!</motion.p>
        <div className="flex gap-[80px] mx-6 md:mx-16 flex-wrap mt-24 justify-center">
            {product}
        </div>
        </div>
    )
}