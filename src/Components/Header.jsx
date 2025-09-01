import { NavLink } from "react-router";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 h-16 header-bg px-5 shadow-md z-10 flex items-center justify-between box-border">

            <h1 className="font-extrabold text-cyan-950">Just<span className="text-orange-500">JD</span></h1>

            {/* links */}
            <nav className="flex items-center gap-4">
                <NavLink
                    className={({ isActive }) =>
                        `${isActive ? "text-orange-500" : "text-gray-900"} font-semibold`
                    }
                    to={'/'}
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive ? "text-orange-500" : "text-gray-900"} font-semibold`
                    }
                    to={'/currency-converter'}
                >
                    Currency Converter
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive ? "text-orange-500" : "text-gray-900"} font-semibold`
                    }
                    to={'/password-generator'}
                >
                    Password Generator
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive ? "text-orange-500" : "text-gray-900"} font-semibold`
                    }
                    to={'/bg-changer'}
                >
                    Background Changer
                </NavLink>
            </nav>
            {/* Login/Logout */}
            <div></div>

        </header>
    )
}

export default Header;