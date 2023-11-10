import ParticlesComponent from '@/components/modules/particles/Particles';
import '@/styles/globals.css'
import  Navbar  from "@/components/modules/navbar/Navbar"
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className='relative bg-no-repeat bg-cover bg-bottom h-[100vh] bg-[url(https://wallpapercave.com/dwp1x/wp4806722.jpg)]'>
         <Navbar />
          <div className='bg-overly bg-[#0c0c0c] opacity-[.6] absolute left-0 top-0 w-full h-full'></div>
          <Component {...pageProps} />
          <ParticlesComponent />
        </main> 
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

// https://wallpaperset.com/w/full/0/7/c/39771.jpg
//https://wallpapercave.com/dwp1x/wp6225034.jpg
//https://wallpapercave.com/dwp1x/wp4806722.jpg
//https://wallpapercave.com/dwp1x/wp4806736.jpg 
//https://wallpapercave.com/dwp1x/wp5307976.jpg