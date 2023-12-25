import { NavLink } from "react-router-dom"


export default function Footer(){
    return (
        <footer id="footer" className="flex flex-col bottom-0 bg-zinc-900 text-zinc-100 pt-16 pb-6 justify-between">
            <div className="flex flex-col md:flex-row mx-16 items-center md:justify-between gap-4 mb-12 text-xs md:text-base ">
            <NavLink to="/"><span className="font-font-weather text-2xl font-bold">Riccardo</span> <span className="block text-center mt-[-2px] text-xs">EYEWEAR</span></NavLink>
            <div className="flex flex-col items-center">
                <p className="font-bold mb-2 md:mb-4 text-xl ">Useful Links</p>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/men">Men</NavLink>
                <NavLink to="/women">Women</NavLink>
                <NavLink to="/about">About Us</NavLink>
             
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold mb-2 md:mb-4 text-xl">Contact</p>
                <p>123 Fifth Avenue, New York, NY 10160</p>
                <a href="mailto:contact@info.com">contact@info.com</a>
                <p>929-242-6868</p>
            </div>
            </div>
        
             <p className="text-xs md:text-base text-center font-semibold pt-6 border-t border-zinc-800">Copyright © 2023 Eyewear Store | Design Inspiration by websitedemos</p>
        </footer>
    )
} 