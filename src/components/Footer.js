import { NavLink } from "react-router-dom"


export default function Footer(){
    return (
        <footer id="footer" className="flex flex-col bottom-0 bg-purple-100 pt-16 pb-6 justify-between">
            <div className="flex flex-col md:flex-row mx-16 items-center md:justify-between gap-4 mb-12">
            <NavLink to="/"><span className="font-font-weather text-3xl font-bold">Riccardo</span> <span className="block text-center mt-[-2px] text-zinc-600 text-xs md:text-sm">EYEWEAR</span></NavLink>
            <div className="flex flex-col items-center text-xs md:text-base ">
                <p className="font-bold mb-2 md:mb-4 text-lg">Useful Links</p>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/men">Men</NavLink>
                <NavLink to="/women">Women</NavLink>
                <NavLink to="/about">About Us</NavLink>
             
            </div>
            <div className="flex flex-col items-center text-xs md:text-base">
                <p className="font-bold mb-2 md:mb-4 text-lg">Contact</p>
                <p>123 Fifth Avenue, New York, NY 10160</p>
                <a href="mailto:contact@info.com">contact@info.com</a>
                <p>929-242-6868</p>
            </div>
            </div>
        
             <p className="text-xs md:text-base text-center font-semibold pt-6 border-t border-pink-200">Copyright © 2023 Eyewear Store | Design Inspiration by websitedemos</p>
        </footer>
    )
} 