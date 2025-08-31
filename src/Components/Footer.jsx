import { NavLink } from "react-router";

const Footer = ()=>{
    return (
        <footer className="min-h-[75px] px-5 py-2 w-full min-w-full flex items-start justify-between bg-cyan-950 text-gray-300">

            {/* links */}
            <div>
                <h5>Navigation</h5>
                <nav className="flex items-center gap-3">
                    <NavLink className={({isActive})=>(`${isActive? 'underline':''} text-sm`)} to={'/'} >Home</NavLink>
                </nav>
            </div>
            <div className="text-sm self-end">
                ©2025. JustJD. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer;