import { Outlet } from "react-router"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

const AppLayout = () => {
    return (
        <div className="w-full max-w-screen overflow-x-hidden">
            <div className="h-[100vh] flex flex-col relative pt-[75px]">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout;