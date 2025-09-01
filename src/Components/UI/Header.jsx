import { NavLink } from "react-router";
import DarkMode from "../DarkMode";

const Header = () => {
    const headerNavLinks = [
        {label: 'Home', link:"/"},
        {label: 'Projects', link:"/projects"},
        // {label: 'Currency Converter', link:"/currency-converter"},
        // {label: 'Password Generator', link:"/password-generator"},
        // {label: 'Background Changer', link:"/bg-changer"},
    ]
    return (
        <header className="fixed top-0 left-0 right-0 h-16 header-bg px-10 shadow-md z-10 flex items-center justify-between box-border">

            <h1 className="font-extrabold text-cyan-950 dark:text-gray-100">Just<span className="text-orange-500">JD</span></h1>

            {/* links */}
            <nav className="flex items-center gap-4">
                {headerNavLinks?.map((item, idx)=>(
                    <NavLink
                        key={idx}
                        className={({ isActive }) =>
                            `${isActive ? "text-orange-500" : "text-gray-900 dark:text-gray-100"} font-semibold`
                        }
                        to={item.link}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
            {/* Login/Logout */}
            <div>
                <DarkMode/>
            </div>

        </header>
    )
}

export default Header;