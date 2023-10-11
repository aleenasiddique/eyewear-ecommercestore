import productData from "../data.js"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


export default function Men(){
    const collection = productData.data.product
  const displayedMen = collection.filter(product => product.type === 'Men')
    const product = displayedMen.map(product =>(
        <div key={product.id} className="flex flex-col items-center gap-1 border-b border-purple-200 md:border-none pb-8">
            <Link to={`/shop/${product.id}`}>
            <img className="w-[350px] h-[380px] object-cover" src={product.imageUrl} alt={product.name}/>
            <p className="text-xl font-bold mt-3">{product.name}</p>
            <p className="text-xl italic">{product.type}'s Eyewear</p>
            <p className="text-lg font-bold"> ${product.price}</p>
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

    return (
        <div className="my-[100px] md:my-[150px]">
        <p className="font-font-weather font-bold text-center text-3xl md:text-6xl italic">Shop Our Versatile Collection!</p>
    <div className="flex gap-[80px] mx-6 md:mx-16 flex-wrap mt-16 justify-center">
        {product}
    </div>
    </div>
    )
}