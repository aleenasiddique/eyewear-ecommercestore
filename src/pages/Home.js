import { NavLink } from "react-router-dom"
import {  easeInOut, motion, } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import aboutOne from "../assets/images/homepage1.png"
import aboutTwo from "../assets/images/homepage2.webp"
import homeImage from "../assets/images/homepage3.png"
import michaelImage from "../assets/images/michael.png"
import jamesImage from "../assets/images/james.webp"
import emilyImage from "../assets/images/emily.png"
import homeImage2 from "../assets/images/homepage4.png"
import heroImage from "../assets/images/hero.png"


export default function Home(){
   
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
 

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 h-[calc(100vh-90px)] bg-gradient-to-r  from-green via-pink  to-green">
                <div className="w-[320px] md:w-[660px] p-12 md:p-16">
                <motion.div variants = {fadeoutVariants} initial ="initial" animate="animate"
                 className="flex flex-col  gap-4">
                    <motion.p variants ={fadeoutVariants} className="text-5xl font-extrabold font-font-weather text-dark-green italic">Original Sunglasses</motion.p>
                    <motion.p variants ={fadeoutVariants} className="text-xl text-zinc-100">Elevate your look with our curated collection of premium eyewear – where trends meet timeless elegance one frame at a time.</motion.p>
                  <motion.div variants ={fadeoutVariants} className="-ml-1 mt-2">
                    <NavLink  to="/shop" className=" font-bold py-3 px-10 text-center  shadow-md shadow-dark-green bg-dark-green text-zinc-200 hover:bg-teal-900 transition-colors ease-in-out duration-300 ">SHOP NOW</NavLink>
                  </motion.div>
                </motion.div>
                </div>
                <div className="hidden md:flex justify-center items-center w-[600px] h-[450px] bg-green backdrop-blur-xl bg-opacity-10 ">
                  <img src={heroImage} className="w-[93%] h-[93%]"/>
                </div>
            </div>
            <div className="flex gap-8 justify-center flex-wrap my-14 mx-8">
                <motion.div variants = {fadeoutVariants} initial ="initial" whileInView="animate" viewport={{ once: true }}
                className="flex flex-col gap-4 w-[430px] justify-center">
                    <motion.p  variants={fadeoutVariants}className="font-extrabold text-3xl md:text-4xl font-font-weather text-dark-green italic">A Few Words About Us</motion.p>
                    <motion.p variants={fadeoutVariants}>At <span className="font-font-weather font-extrabold text-dark-green ">Riccardo</span>, we redefine eyewear, offering meticulously crafted designs that marry fashion and functionality, empowering you to embrace your distinct style with confidence and sophistication.</motion.p>
                    <motion.div variants ={fadeoutVariants} className="-ml-1 mt-2">
                    <NavLink to="/about" className=" font-bold py-3 text-center px-8 text-zinc-100 bg-dark-green shadow-md shadow-dark-green hover:bg-teal-900 transition-colors ease-in-out duration-300">READ MORE</NavLink>
                </motion.div>
                </motion.div>
                <img src={aboutOne} className="w-[330px] md:w-[430px] h-[350px] md:h-[550px]" />
                <img src={aboutTwo} className="w-[330px] md:w-[430px] h-[350px] md:h-[550px]" />
            </div>
            <div className="flex items-center justify-end bg-cover bg-center h-[600px] my-12" style={{backgroundImage:`url(${homeImage})`}}>
                <motion.div variants = {fadeoutVariants} initial ="initial" whileInView="animate" viewport={{ once: true }} 
                className="flex flex-col mx-6 md:mx-16 gap-4 w-[330px] md:w-[700px]">
                    <motion.p variants={fadeoutVariants} className="text-xl md:text-4xl font-extrabold font-font-weather text-dark-green italic">Be Different In Your Own Way!</motion.p>
                    <motion.p  variants={fadeoutVariants} className="text-base md:text-lg">Embrace individuality with our diverse eyewear collection, meticulously curated to let you express your unique style and stand out in every crowd.</motion.p>
                    <motion.div variants ={fadeoutVariants} className="-ml-1 mt-2">
                    <NavLink to="/shop" className=" font-bold py-3 text-center px-8 text-zinc-100 bg-dark-green shadow-md shadow-dark-green hover:bg-teal-900 transition-colors ease-in-out duration-300">SHOP NOW</NavLink>
                </motion.div>
                </motion.div>
            </div>
            <div className="my-14">
              <motion.div variants = {fadeoutVariants} initial ="initial" whileInView="animate" viewport={{ once: true }}>
                <motion.p variants={fadeoutVariants}className="text-center mb-1  font-bold">Client's Reviews</motion.p>
                <motion.p variants={fadeoutVariants}className="text-center font-font-weather text-4xl mb-12 font-extrabold italic text-dark-green">Testimonials</motion.p>
                </motion.div>
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
          <p className="font-extrabold text-dark-green">Michael R.</p>
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
          <p className="font-extrabold text-dark-green">James D.</p>
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
          <p className="font-extrabold text-dark-green">Emily W.</p>
        </div>
       </div>
       <p className="mt-6">"Riccardo has become my go-to destination for eyewear. The exquisite frames not only fit perfectly but also make a bold fashion statement.
        The attention to comfort and durability is evident, and I receive compliments every time I wear them. I appreciate the personalized service and the array of choices."</p>
      </div>
      </div>
            </div>
            <div className="my-14 mx-6 md:mx-[100px] flex justify-between flex-wrap ">
              <motion.div variants = {fadeoutVariants} initial ="initial" whileInView="animate" viewport={{ once: true }}
              className="flex flex-col gap-4 w-[330px] md:w-[600px] justify-center">
                <motion.p variants={fadeoutVariants} className="font-font-weather font-extrabold text-4xl text-dark-green italic">How To Take Care Of Your Eyewear</motion.p>
                <motion.p variants={fadeoutVariants} className="text-base md:text-lg">Protect your eyewear by storing them in a case, cleaning the lenses with a gentle cloth, and avoiding direct sunlight and heat. 
                    Handle with care for enduring style and clear vision</motion.p>
                    <motion.div variants ={fadeoutVariants} className="-ml-1 mt-2">
                    <NavLink  to="/about" className=" mb-8 font-bold py-3 text-center px-8 text-zinc-100 bg-dark-green shadow-md shadow-dark-green hover:bg-teal-900 transition-colors ease-in-out duration-300">READ MORE</NavLink>
              </motion.div>
              </motion.div>
              <img src={homeImage2} className="w-[330px] md:w-[500px] h-[400px] md:h-[500px] mt-6" />
            </div>
        </div>
    )
}