import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"


export default function Header ({quantity}){
    const [isOpen, setIsOpen] = React.useState(false)
    function toggleMobileMenu(){
        setIsOpen(prevMenu => !prevMenu)
    }
    function closeMobileMenu(){
        setIsOpen(false)
    }
   

    return (
        <header>
         
       <nav className=" hidden md:flex  h-[90px] px-12 top-0 bg-gradient-to-r from-green via-pink  to-green">
        <div className="flex flex-1 justify-start mr-auto gap-4 lg:gap-8 text-sm lg:text-base items-center text-zinc-600 font-bold">
         <NavLink to="/" className={ ({isActive}) => isActive ? "text-teal-950 font-bold text-lg" : "relative text-lg first-nav text-dark-green  hover:text-teal-950 transition-colors duration-300"}>Home</NavLink>
         <NavLink to="about" className={ ({isActive}) => isActive ? "text-teal-950 font-bold text-lg" : "relative text-lg first-nav text-dark-green  hover:text-teal-950 transition-colors duration-300 hidden lg:block"}>About Us</NavLink>
         <NavLink to="men" className={ ({isActive}) => isActive ? "text-teal-950 font-bold text-lg" : "relative text-lg first-nav text-dark-green  hover:text-teal-950 transition-colors duration-300"}>Men</NavLink>
         <NavLink to="women" className={ ({isActive}) => isActive ? "text-teal-950 font-bold text-lg" : "relative text-lg first-nav text-dark-green  hover:text-teal-950 transition-colors duration-300"}>Women</NavLink>
         <a href="#footer" className="relative first-nav text-dark-green  hover:text-teal-950 hidden lg:block scroll-smooth text-lg">Contact</a>
         
        </div>
        <NavLink to="/" className="mx-4 mt-4"><span className="font-font-weather text-3xl font-extrabold text-dark-green">Riccardo</span> <span className="block text-center mt-[-2px] text-zinc-400 text-sm font-semibold">Eyewear</span></NavLink>
        <div className="flex flex-1 justify-end ml-auto gap-4 lg:gap-8 text-sm lg:base items-center">
            <div className="relative">
            <NavLink to="/cart"><i className="text-2xl text-dark-green">{<FontAwesomeIcon  icon={faBasketShopping}/>}</i></NavLink>
            <div className="flex items-center justify-center absolute w-[14px] h-[14px] rounded-[7px] bg-dark-green text-zinc-200 text-[9px] -top-[2px] left-[6px]"><p>{quantity}</p></div>
            </div>
            <NavLink to="/" className="py-2 pl-2 pr-7 border border-dark-green font-bold  transition-colors ease-in-out duration-300 flex justify-between gap-3 items-center text-zinc-200"> 
            <div className="w-7 h-7 rounded-sm bg-dark-green flex justify-center items-center text-sm transform hover:rotate-[360deg] transition-transform duration-1000 ease-in-out">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            LOG IN NOW</NavLink>
        </div>
       </nav>
       <div className="flex md:hidden px-6 justify-between h-[90px] bg-gradient-to-r from-green via-pink to-green items-center ">
       <NavLink to="/" className=""><span className="font-font-weather text-xl font-extrabold text-dark-green">Riccardo</span> <span className="block text-center mt-[-2px] text-zinc-400 text-[9px]">EYEWEAR</span></NavLink>
      <div className="flex gap-4 items-center">
        <div className="relative"> 
      <NavLink to="/cart"><i className="text-2xl mb-[80px] text-dark-green">{<FontAwesomeIcon  icon={faBasketShopping}/>}</i></NavLink>
      <div className="flex items-center justify-center absolute w-[14px] h-[14px] rounded-[7px] bg-dark-green text-zinc-200 text-[9px] -top-[2px] left-[6px]"><p>{quantity}</p></div> 
      </div>
       <div onClick={toggleMobileMenu} >
       <div className={`bg-dark-green  relative  rounded-full w-8 h-1 transition-all ease-in-out  duration-200
                    ${isOpen && 'rotate-45 top-2 '}`}></div>
                    <div className={`bg-dark-green relative rounded-full w-8 h-1 mt-1 
                    ${isOpen && 'opacity-0'}`}></div>
                    <div className={`bg-dark-green  relative rounded-full w-8 h-1 mt-1  transition-all ease-in-out  duration-200
                     ${isOpen && '-rotate-45 -top-2'}`}></div>
       </div>
       
       </div>
       </div>
       {isOpen &&  <div className="absolute bg-gradient-to-r from-green via-pink to-green h-full w-full flex flex-col gap-6 left-0 items-center top-16 pt-16 text-dark-green font-extrabold text-lg">
               <NavLink
            to="/"
            onClick={closeMobileMenu}
            >
                HOME
            </NavLink>
          
            <NavLink
            to="/shop"
            onClick={closeMobileMenu} 
           >
              SHOP
            </NavLink>
           
            <NavLink
            to="/men"
            onClick={closeMobileMenu} 
           >
              MEN
            </NavLink> 
           
            <NavLink
            to="/women"
            onClick={closeMobileMenu}
            >
                WOMEN
            </NavLink>
          
            <a href="#footer"
            to="/contact"
            onClick={closeMobileMenu} 
            >
                CONTACT
            </a>
           
            <NavLink
            to="/about"
            onClick={closeMobileMenu}
            >
                ABOUT
            </NavLink>
            <NavLink
            to="/"
            onClick={closeMobileMenu}
             className="py-2 px-[80px] rounded-lg bg-dark-green shadow-md shadow-dark-green  text-zinc-200 mt-2 font-bold" 
            >
                LOGIN
            </NavLink>
                </div> }
       </header>
    )
}