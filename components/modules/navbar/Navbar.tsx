"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="z-20 relative pt-3 flex justify-between px-8 items-center">
      <ul className="flex items-center gap-8 z-30 xs:w-full xs:justify-between xs:pt-4  font-arturo">
        <Link
          href={"/"}
          prefetch
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
          prefetch
          className={`${
            path === "/support" && "active"
          } hover:text-[#0984e3] cursor-pointer transition-colors`}
        >
          Support
        </Link>
      </ul>
      <div className="flex items-center xs:hidden z-30 gap-2">
        <Link prefetch href={"/"} className="flex flex-col font-arturo">
          <span>Storm</span>
          <span>Seeker</span>
        </Link>
        <Image
          src="/images/wind.png"
          className="w-[50px]"
          height={1000}
          width={1000}
          alt="logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
