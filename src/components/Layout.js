import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Shipping from "./Shipping"

export default function Layout(){
    return (
        <div className="scroll-smooth">
        <Header />
        <main>
            <Outlet />
        </main>
        <Shipping />
        <Footer />
        </div>

    )
}