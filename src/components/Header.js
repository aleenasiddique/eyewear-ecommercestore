import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"



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
         
       <nav className=" hidden md:flex  h-[90px] px-12 top-2 border-y border-pink-100 bg-purple-100">
        <div className="flex flex-1 justify-start mr-auto gap-4 lg:gap-8 text-sm lg:base items-center text-zinc-600 font-bold">
         <NavLink to="/" className={ ({isActive}) => isActive ? "text-black font-bold" : "relative first-nav hover:text-black"}>HOME</NavLink>
         <NavLink to="about" className={ ({isActive}) => isActive ? "text-black font-bold" : "relative first-nav hover:text-black hidden lg:block"}>ABOUT US</NavLink>
         <NavLink to="men" className={ ({isActive}) => isActive ? "text-black font-bold" : "relative first-nav hover:text-black"}>MEN</NavLink>
         <NavLink to="women" className={ ({isActive}) => isActive ? "text-black font-bold" : "relative first-nav hover:text-black"}>WOMEN</NavLink>
         <a href="#footer" className="relative first-nav hover:text-black hidden lg:block">CONTACT</a>
         
        </div>
        <NavLink to="/" className="mx-4 mt-4"><span className="font-font-weather text-3xl font-bold">Riccardo</span> <span className="block text-center mt-[-2px] text-zinc-600 text-sm">EYEWEAR</span></NavLink>
        <div className="flex flex-1 justify-end ml-auto gap-4 lg:gap-8 text-sm lg:base items-center">
            <div className="relative">
            <NavLink to="/cart"><i className="text-2xl">{<FontAwesomeIcon  icon={faBasketShopping}/>}</i></NavLink>
            <div className="flex items-center justify-center absolute w-[14px] h-[14px] rounded-[7px] bg-black text-white text-[9px] -top-[2px] left-[6px]"><p>{quantity}</p></div>
            </div>
            <NavLink to="/" className="py-3 px-10 border border-black font-semibold hover:text-pink-300 hover:border-pink-300 transition-colors ease-in-out duration-300">LOG IN</NavLink>
        </div>
       </nav>
       <div className="flex md:hidden px-6 justify-between h-[90px] bg-purple-100 items-center border-y border-pink-200">
       <NavLink to="/" className=""><span className="font-font-weather text-lg font-bold">Riccardo</span> <span className="block text-center mt-[-2px] text-zinc-600 text-[9px]">EYEWEAR</span></NavLink>
      <div className="flex gap-4 items-center">
        <div className="relative"> 
      <NavLink to="/cart"><i className="text-2xl mb-[80px]">{<FontAwesomeIcon  icon={faBasketShopping}/>}</i></NavLink>
      <div className="flex items-center justify-center absolute w-[14px] h-[14px] rounded-[7px] bg-black text-white text-[9px] -top-[2px] left-[6px]"><p>{quantity}</p></div> 
      </div>
       <div onClick={toggleMobileMenu} >
       <div className={`bg-black  relative  rounded-full w-8 h-1 transition-all ease-in-out  duration-200
                    ${isOpen && 'rotate-45 top-2 '}`}></div>
                    <div className={`bg-black relative rounded-full w-8 h-1 mt-1 
                    ${isOpen && 'opacity-0'}`}></div>
                    <div className={`bg-black  relative rounded-full w-8 h-1 mt-1  transition-all ease-in-out  duration-200
                     ${isOpen && '-rotate-45 -top-2'}`}></div>
       </div>
       
       </div>
       </div>
       {isOpen &&  <div className="absolute bg-purple-100 h-full w-full flex flex-col gap-4 left-0 items-center top-16 pt-10">
               <NavLink
            to="/"
            onClick={closeMobileMenu}
            >
                HOME
            </NavLink>
            <hr className="w-full" />
            <NavLink
            to="/shop"
            onClick={closeMobileMenu} 
           >
              SHOP
            </NavLink>
            <hr className="w-full" />
            <NavLink
            to="/men"
            onClick={closeMobileMenu} 
           >
              MEN
            </NavLink> 
            <hr className="w-full" />
            <NavLink
            to="/women"
            onClick={closeMobileMenu}
            >
                WOMEN
            </NavLink>
            <hr className="w-full" />
            <a href="#footer"
            to="/contact"
            onClick={closeMobileMenu} 
            >
                CONTACT
            </a>
            <hr className="w-full" />
            <NavLink
            to="/about"
            onClick={closeMobileMenu}
            >
                ABOUT
            </NavLink>
            <NavLink
            to="/"
            onClick={closeMobileMenu}
             className="py-2 px-[80px] rounded-lg bg-rose-400 text-white mt-2 font-bold" 
            >
                LOGIN
            </NavLink>
                </div> }
       </header>
    )
}