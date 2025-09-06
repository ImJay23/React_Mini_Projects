import { Outlet } from "react-router"
import Footer from "../Components/UI/Footer"
import Header from "../Components/UI/Header"

const AppLayout = () => {
    return (
        <>
        <div className="min-h-screen h-full min-w-screen overflow-x-hidden">
            <Header />
            <main className="min-h-screen h-full flex flex-col pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
        </>
    )
}

export default AppLayout;