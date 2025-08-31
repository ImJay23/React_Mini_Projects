import { NavLink } from "react-router";

const Header = () => {
    return (
        <header className="h-[75px] w-full bg-gray-300/50 backdrop-blur-md fixed top-0 z-50 flex items-center justify-around">

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