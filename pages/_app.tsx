import ParticlesComponent from '@/components/modules/Particles/Particles';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <> 
      <QueryClientProvider client={queryClient}>
        <div className='relative bg-no-repeat bg-cover h-[100vh] bg-[url(https://apieco.ir/wp-content/uploads/2019/03/cover.jpg)]'>
          <div className='bg-overly bg-[#0c0c0c] opacity-[.6] absolute left-0 top-0 w-full h-full'></div>
          <Component {...pageProps} />
          <ParticlesComponent />
        </div>
        
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}     

