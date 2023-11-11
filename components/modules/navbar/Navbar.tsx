const Navbar = () => {
    return (
        <nav className="z-20 relative pt-3 flex justify-between px-8 items-center">
            <ul className="flex items-center gap-8 z-30 sm-x2:w-full sm-x2:justify-between sm-x2:pt-4  font-arturo">
                <li className="active hover:text-[#0984e3] cursor-pointer transition-colors">Home</li>
                <li className="hover:text-[#0984e3] cursor-pointer transition-colors">Explore</li>
                <li className="hover:text-[#0984e3] cursor-pointer transition-colors">Support</li>
            </ul>
            <div className="flex items-center sm-x2:hidden z-30 gap-2">
                <div className="flex flex-col font-arturo">
                    <span>Storm</span>
                    <span>Seeker</span>
                </div>
                <img width={70} src="/images/icons8-night-100.png" alt="" />
            </div>
        </nav>
    )
}

export default Navbar
