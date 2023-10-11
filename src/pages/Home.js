import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import heroImage from "../assets/images/hero1.webp"
import aboutOne from "../assets/images/homepage1.png"
import aboutTwo from "../assets/images/homepage2.webp"
import homeImage from "../assets/images/homepage3.png"
import michaelImage from "../assets/images/michael.png"
import jamesImage from "../assets/images/james.webp"
import emilyImage from "../assets/images/emily.png"
import homeImage2 from "../assets/images/homepage4.png"


export default function Home(){

    return (
        <div>
            <div className="flex items-center h-[calc(100vh-90px)] bg-cover bg-center" style={{backgroundImage: `url(${heroImage})`}}>
                <div className="w-[330px] md:w-[700px] p-12 md:p-16">
                <div className="flex flex-col  gap-4">
                    <p className="text-5xl font-bold font-font-weather">Original Sunglasses</p>
                    <p className="text-lg">Elevate your look with our curated collection of premium eyewear – where trends meet timeless elegance one frame at a time.</p>
                    <NavLink to="/shop" className=" font-bold py-3 text-center w-[150px] border border-black hover:text-pink-500 hover:border-pink-500 transition-colors ease-in-out duration-300">SHOP NOW</NavLink>
                </div>
                </div>
            </div>
            <div className="flex gap-8 justify-center flex-wrap my-14 mx-8">
                <div className="flex flex-col gap-2 w-[430px] justify-center">
                    <p className="font-bold text-3xl md:text-4xl font-font-weather">A Few Words About Us</p>
                    <p>At <span className="font-font-weather font-bold">Riccardo</span>, we redefine eyewear, offering meticulously crafted designs that marry fashion and functionality, empowering you to embrace your distinct style with confidence and sophistication.</p>
                    <NavLink to="/about" className="mt-4 font-bold py-3 text-center w-[150px] border border-black hover:text-pink-300 hover:border-pink-300 transition-colors ease-in-out duration-300">READ MORE</NavLink>
                </div>
                <img src={aboutOne} className="w-[330px] md:w-[430px] h-[350px] md:h-[550px]" />
                <img src={aboutTwo} className="w-[330px] md:w-[430px] h-[350px] md:h-[550px]" />
            </div>
            <div className="flex items-center justify-end bg-cover bg-center h-[600px] my-12" style={{backgroundImage:`url(${homeImage})`}}>
                <div className="flex flex-col mx-6 md:mx-16 gap-2 w-[330px] md:w-[700px]">
                    <p className="text-xl md:text-4xl font-bold font-font-weather">Be Different In Your Own Way!</p>
                    <p  className="text-base md:text-lg">Embrace individuality with our diverse eyewear collection, meticulously curated to let you express your unique style and stand out in every crowd.</p>
                    <NavLink to="/shop" className="mt-4 font-bold py-3 text-center w-[150px] border border-black hover:text-pink-300 hover:border-pink-300 transition-colors ease-in-out duration-300">SHOP NOW</NavLink>
                </div>
            </div>
            <div className="my-14">
                <p className="text-center mb-1  font-bold">Client's Reviews</p>
                <p className="text-center font-font-weather text-5xl md:text-6xl mb-12">Testimonials</p>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 mx-16">
      <div className="flex flex-col border rounded-lg w-[330px] md:w-[380px] p-8 ">
       <div className="flex">
        <img src={michaelImage} className="w-[70px] h-[70px] rounded-[35px] object-cover" alt="customer"/>
        <div className="ml-4 mt-2">
          <i>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          </i>
          <p className="font-bold">Michael R.</p>
        </div>
       </div>
       <p className="mt-6">"I couldn't be happier with my purchase from Riccardo. The quality and style of the eyewear I received exceeded my expectations. 
       The unique designs allowed me to express my personality effortlessly. The exceptional service and attention to detail truly made my shopping experience
        unforgettable."</p>
      </div>
      <div className="flex flex-col border rounded-lg w-[330px] md:w-[380px] p-8">
       <div className="flex">
        <img src={jamesImage} className="w-[70px] h-[70px] rounded-[35px] object-cover" alt="customer" />
        <div className="ml-4 mt-2">
          <i>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300"/>
          </i>
          <p className="font-bold">James D.</p>
        </div>
       </div>
       <p className="mt-6">"Shopping at Riccardo was a revelation. The eyewear selection caters to every taste and occasion. The customer service team was incredibly 
       helpful, guiding me to find the perfect pair that reflects my personality. The high-quality materials and attention to craftsmanship are truly remarkable.
        I've found my eyewear haven!" </p>
      </div>
      <div className="flex flex-col border rounded-lg w-[330px] md:w-[380px] p-8">
       <div className="flex">
        <img src={emilyImage} className="w-[70px] h-[70px] rounded-[35px] object-cover" alt="customer"/>
        <div className="ml-4 mt-2">
          <i>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          </i>
          <p className="font-bold">Emily W.</p>
        </div>
       </div>
       <p className="mt-6">"Riccardo has become my go-to destination for eyewear. The exquisite frames not only fit perfectly but also make a bold fashion statement.
        The attention to comfort and durability is evident, and I receive compliments every time I wear them. I appreciate the personalized service and the array of choices."</p>
      </div>
      </div>
            </div>
            <div className="my-14 mx-6 md:mx-[100px] flex justify-between flex-wrap ">
              <div className="flex flex-col gap-2 w-[330px] md:w-[600px] justify-center">
                <p className="font-font-weather font-bold text-lg md:text-6xl">How To Take Care Of Your Eyewear</p>
                <p className="text-base md:text-lg">Protect your eyewear by storing them in a case, cleaning the lenses with a gentle cloth, and avoiding direct sunlight and heat. 
                    Handle with care for enduring style and clear vision</p>
                    <NavLink to="/about" className="mt-4 mb-8 font-bold py-3 text-center w-[150px] border border-black hover:text-pink-300 hover:border-pink-300 transition-colors ease-in-out duration-300">READ MORE</NavLink>
              </div>
              <img src={homeImage2} className="w-[330px] md:w-[500px] h-[400px] md:h-[500px]" />
            </div>
        </div>
    )
}