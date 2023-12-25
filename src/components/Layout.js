import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Shipping from "./Shipping"

export default function Layout({quantity}){
    return (
        <div className="bg-light-pink">
        <Header quantity={quantity}/>
        <main>
            <Outlet />
        </main>
        <Shipping />
        <Footer />
        </div>

    )
}