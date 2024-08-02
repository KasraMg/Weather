"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const path = usePathname();  
  return (
    <nav className="z-20 relative pt-3 flex justify-between px-8 items-center">
      <ul className="flex items-center gap-8 z-30 sm-x2:w-full sm-x2:justify-between sm-x2:pt-4  font-arturo">
        <Link
          href={"/"}
          className={`${
            path === "/" && "active"
          }  hover:text-[#0984e3] cursor-pointer transition-colors`}
        >
          Home
        </Link>
        <Link
          href={"/explore"}
          className={`${
            path === "/explore" && "active"
          } hover:text-[#0984e3] cursor-pointer transition-colors`}
        >
          Explore
        </Link>
        <Link
          href={"/support"}
          className={`${
            path === "/support" && "active"
          } hover:text-[#0984e3] cursor-pointer transition-colors`}
        >
          Support
        </Link>
      </ul>
      <div className="flex items-center sm-x2:hidden z-30 gap-2">
        <Link href={"/"} className="flex flex-col font-arturo">
          <span>Storm</span>
          <span>Seeker</span>
        </Link>
        <img width={70} src="/images/icons8-night-100.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
