import { NavLink } from "react-router-dom"
import heroImage from "../assets/images/about1.png"
import visionImage from "../assets/images/vision.png"
export default function About(){
    return (
        <div>
        <div className="h-60 md:h-[470px] w-full bg-center bg-cover flex flex-col items-center justify-center" style={{backgroundImage:`url(${heroImage})`}}>
        <div className="w-[330px] md:w-[900px]">
                <p className="text-xs md:text-lg font-bold text-center mb-2 md:mb-4">About us</p>
                <p className="text-2xl md:text-5xl md:leading-[60px] font-font-weather font-bold text-center">We are an Eyewear brand based in Milan, Italy!</p>
            </div>
            <NavLink to="/shop" className="mt-4 md:mt-8 font-semibold md:font-bold py-1 md:py-3 text-center w-[120px] md:w-[150px] border border-black hover:text-pink-400 hover:border-pink-400 transition-colors ease-in-out duration-300">SHOP NOW</NavLink>
        </div>
        <div className="flex justify-center">
            <p className="mx-12 md:mx-[200px]  mt-16 md:mt-[100px] w-[330px] md:w-[900px] md:text-xl md:leading-8">"Crafted in the heart of Milan, Italy, our brand embodies the essence of Italian sophistication and timeless elegance. Inspired by the city's rich
                 cultural heritage and avant-garde fashion scene, we curate exquisite eyewear that seamlessly marries classic design with contemporary trends.
                 With a deep commitment to excellence, we bring the allure of Milanese fashion to the world, delivering eyewear that is as exceptional as the city
                  that inspires us. Discover the epitome of Italian luxury and innovation, tailored just for you." </p>
        </div>
        <div className="flex mx-12 md:mx-[200px] justify-between mt-[150px] mb-16 gap-10 md:gap-16 items-center flex-wrap">
            <div className=" relative w-[330px] md:w-[500px] h-[360px] md:h-[500px]">
            <img className=" bg-cover bg-center w-full h-full" style={{backgroundImage:`url(${visionImage})`}}/>
                <p className="mx-12 absolute -top-[60px] md:-top-[85px] font-font-weather font-bold text-4xl md:text-6xl leading-10">Our <span className="block">Vision</span> </p>
                </div>
                <div className="flex flex-1">
                    <div>
                    <p className="font-font-weather font-bold text-xl md:text-3xl mb-4">At Riccardo our vision is to redefine Eyewear! </p>
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