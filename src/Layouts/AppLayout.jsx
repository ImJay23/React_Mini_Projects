import { Outlet } from "react-router"
import Footer from "../Components/UI/Footer"
import Header from "../Components/UI/Header"

const AppLayout = () => {
    return (
        <>
        <div>
            <Header />
            <main className="min-h-screen h-full max-w-screen overflow-x-hidden flex flex-col pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
        </>
    )
}

export default AppLayout;