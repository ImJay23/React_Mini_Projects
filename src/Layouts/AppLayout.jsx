import { Outlet } from "react-router"
import Footer from "../Components/UI/Footer"
import Header from "../Components/UI/Header"

const AppLayout = () => {
    return (
        <>
        <div className="min-h-screen overflow-x-hidden">
            <Header />
            <div className="h-screen flex flex-col pt-16">
                <Outlet />
            </div>
            <Footer />
        </div>
        </>
    )
}

export default AppLayout;