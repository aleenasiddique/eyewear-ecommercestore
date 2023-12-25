import { NavLink } from "react-router-dom"
import {motion, easeInOut } from "framer-motion"
import visionImage from "../assets/images/vision.png"
export default function About(){
       
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
        <motion.div variants = {fadeoutVariants} initial ="initial" whileInView="animate" viewport={{ once: true }} 
        className="h-60 md:h-[360px] w-full bg-gradient-to-r from-green via-pink to-green flex flex-col items-center justify-center border-t border-white/40">
        <motion.div variants = {fadeoutVariants} initial ="initial" whileInView="animate" viewport={{ once: true }} 
        className="w-[330px] md:w-[900px]">
                <motion.p variants={fadeoutVariants} className="text-xs md:text-lg font-bold text-center">About us</motion.p>
                <motion.p variants={fadeoutVariants} className="text-2xl md:text-4xl  font-font-weather font-extrabold text-center italic text-dark-green">We are an Eyewear brand based in Milan, Italy!</motion.p>
            </motion.div>
            <motion.div variants ={fadeoutVariants} className="-ml-1 mt-4 md:mt-6">
            <NavLink  to="/shop" className=" font-semibold md:font-bold py-1 md:py-3 text-center px-8 md:px-10  bg-dark-green shadow-md shadow-dark-green hover:bg-teal-900 text-zinc-200 transition-colors ease-in-out duration-300">SHOP NOW</NavLink>
        </motion.div>
        </motion.div>
        <div className="flex justify-center">
            <p className="mx-12 md:mx-[200px]  mt-16 md:mt-[100px] w-[330px] md:w-[900px] md:text-xl md:leading-8">"Crafted in the heart of Milan, Italy, our brand embodies the essence of Italian sophistication and timeless elegance. Inspired by the city's rich
                 cultural heritage and avant-garde fashion scene, we curate exquisite eyewear that seamlessly marries classic design with contemporary trends.
                 With a deep commitment to excellence, we bring the allure of Milanese fashion to the world, delivering eyewear that is as exceptional as the city
                  that inspires us. Discover the epitome of Italian luxury and innovation, tailored just for you." </p>
        </div>
        <div className="flex mx-12 md:mx-[200px] justify-between mt-[150px] mb-16 gap-10 md:gap-16 items-center flex-wrap">
            <div className=" relative w-[330px] md:w-[500px] h-[360px] md:h-[500px]">
            <img className=" bg-cover bg-center w-full h-full" style={{backgroundImage:`url(${visionImage})`}}/>
                <motion.p variants = {fadeoutVariants} initial ="initial" whileInView="animate" viewport={{ once: true }} 
                className="mx-12 absolute -top-[60px] md:-top-[85px] font-font-weather font-extrabold text-4xl md:text-6xl text-dark-green leading-10 ">
                    <motion.span variants={fadeoutVariants}>Our </motion.span>
                    <motion.span variants={fadeoutVariants} className="block">Vision</motion.span>
                     </motion.p>
                </div>
                <div className="flex flex-1">
                    <div>
                    <motion.p variants = {fadeoutVariants} initial ="initial" whileInView="animate" viewport={{ once: true }} 
                     className="font-font-weather font-extrabold text-xl md:text-4xl mb-4 text-dark-green italic">At Riccardo our vision is to Redefine Eyewear! 
                     </motion.p>
                    <p className=" md:text-lg">Transcending the ordinary to create extraordinary experiences for our customers. We aspire to be the beacon of innovation, setting new standards
                         in design, comfort, and sustainability within the eyewear industry. Guided by a commitment to timeless style and environmental responsibility,
                          we envision a world where every pair of our eyewear not only complements individuality but also contributes to a brighter, eco-conscious future.
                          <span className="hidden md:inline">With an unwavering dedication to innovation and customer satisfaction, our vision is to inspire confidence, spark conversations, and leave a 
                            lasting impression. We believe in eyewear that not only complements one's features but also tells a story, making every pair a unique statement of style,
                             individuality, and unparalleled quality.</span></p>
                </div>
                </div>
        </div>
        </div>
    )
}