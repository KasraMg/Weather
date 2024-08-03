import ParticlesComponent from "@/components/modules/particles/Particles";
import "./globals.css";
import Navbar from "@/components/modules/navbar/Navbar";
import QueryWrapper from "../providers/QueryWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
 icons:'/images/icons8-night-100.png',
  title: "City Weather"  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="en">
      <body> 
        <QueryWrapper>
          <main className="relative bg-no-repeat bg-cover bg-bottom h-full pb-4 min-h-[100vh] bg-[url(/images/nattu-adnan-atSUvc1hMwk-unsplash.jpg)]">
            <Navbar />
            <div className="bg-overly bg-[#0c0c0c] opacity-[.6] absolute left-0 top-0 w-full h-full"></div>
            {children}
            <ParticlesComponent /> 
          </main>  
        </QueryWrapper>
      </body>
    </html>
  );
}
