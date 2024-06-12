import ParticlesComponent from "@/components/modules/particles/Particles";
import "./globals.css";
import Navbar from "@/components/modules/navbar/Navbar";
import QueryWrapper from "../utils/QueryWrapper";

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
            {/* <Loader /> */}
          </main>
        </QueryWrapper>
      </body>
    </html>
  );
}

{
  /* <Head>
<title>Parallax Effect with React</title>
<link rel="icon" href="/favicon.ico" />
</Head> 

<Suspense
          fallback={
            <div className="center bg-white w-screen h-screen fixed top-0 left-0 z-50">
              <Image
                className="animate-pulse"
                src="/images/logo.svg"
                height={20.63}
                width={100}
                alt="لوگوی جاب ویژن"
              />
            </div>
          }
        >
*/
}

// https://wallpaperset.com/w/full/0/7/c/39771.jpg
//https://wallpapercave.com/dwp1x/wp6225034.jpg
//https://wallpapercave.com/dwp1x/wp4806722.jpg
//https://wallpapercave.com/dwp1x/wp4806736.jpg
//https://wallpapercave.com/dwp1x/wp5307976.jpg
