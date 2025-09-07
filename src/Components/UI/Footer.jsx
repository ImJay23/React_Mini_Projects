import { NavLink } from "react-router";

const Footer = ()=>{
    const footerNavLinks = [
        {label: 'Home', link:"/"},
        {label: 'Projects', link:"/projects"},
    ]
    const projectLinks = [
        {label: 'Currency Converter', link:"/currency-converter"},
        {label: 'Password Generator', link:"/password-generator"},
        {label: 'Background Changer', link:"/bg-changer"},
    ]
    return (
        <footer className="min-h-16 py-5 px-10 bg-cyan-950 text-gray-300">

            {/* links */}
            <div className="flex items-start justify-start gap-12">
                <div>
                    <h5 className="text-white">Navigation</h5>
                    <nav className="flex items-start gap-2 mt-3 flex-col">
                        {footerNavLinks?.map((item,idx)=>(
                            <NavLink key={idx} className={({isActive})=>(`${isActive? 'underline':''} text-sm hover:underline`)} to={item.link} >{item.label}</NavLink>
                        ))}
                    </nav>
                </div>
                <div>
                    <h5 className="text-white">Projects</h5>
                    <nav className="flex items-start gap-2 mt-3 flex-col">
                        {projectLinks?.map((item,idx)=>(
                            <NavLink key={idx} className={({isActive})=>(`${isActive? 'underline':''} text-sm hover:underline`)} to={item.link} >{item.label}</NavLink>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="text-sm text-end mt-8">
                © {new Date().getFullYear()} JustJD. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer;