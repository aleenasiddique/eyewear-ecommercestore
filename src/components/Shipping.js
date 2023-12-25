import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags } from "@fortawesome/free-solid-svg-icons"
import { faShippingFast } from "@fortawesome/free-solid-svg-icons"
import { faCreditCard } from "@fortawesome/free-solid-svg-icons"


export default function Shipping(){
    return (
        <div className="flex flex-wrap  px-12 gap-4 justify-between mt-14 border-y border-zinc-200">
        <div className="flex flex-col items-center py-8 gap-2  w-[330px] md:w-[430px] border-b md:border-r border-zinc-200 h-[350px] ">
            <FontAwesomeIcon icon={faTags} className="text-3xl text-dark-green" />
            <p className="text-xl font-bold mb-4 mt-2 text-dark-green">Big Discounts</p>
            <p className="mx-6 md:mx-16 text-base md:text-lg ">Indulge in irresistible savings with our ongoing exclusive discounts, where you can enjoy premium eyewear at unmatched prices, 
            ensuring style.</p>
        </div>
        <div className="flex flex-col items-center py-8 gap-2 w-[330px] md:w-[430px] border-b md:border-r border-zinc-200 h-[350px]">
            <FontAwesomeIcon icon={faShippingFast} className="text-3xl text-dark-green" />
            <p className="text-xl font-bold mb-4 mt-2 text-dark-green">Free Shipping</p>
            <p className="mx-6 md:mx-16 text-base md:text-lg ">Experience the convenience of seamless shopping with our complimentary worldwide shipping, ensuring your 
            eyewear reaches you hassle-free.</p>
        </div>
        <div className="flex flex-col items-center py-8 gap-2 w-[330px] md:w-[430px]  h-[350px] border-b border-zinc-200">
            <FontAwesomeIcon icon={faCreditCard} className="text-3xl text-dark-green" />
            <p className="text-xl font-bold mb-4 mt-2 text-dark-green">Easy Payments</p>
            <p className="mx-6 md:mx-16 text-base md:text-lg ">Enjoy effortless transactions with our user-friendly online and cash payment options, making shopping for your favorite eyewear 
            a breeze.</p>
        </div>
        </div>
    )
}