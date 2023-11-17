import Card from "@/components/templates/explore/Card"
import { useState } from 'react'

const index = (props: any) => { 
  const [page, setPage] = useState(1) 
  const endIndex = 4 * page;
  const startIndex = endIndex - 4

  return (
    <>
      <main className="grid-cols-[auto,auto] grid gap-20 mt-24 justify-center h-[360px]">
        {props.citiesData.slice(startIndex, endIndex).map((city: any) => (
          <Card {...city} />
        ))}
      </main>

      <ul className="flex justify-center relative z-30 mt-32 gap-4">
        {Array.from({ length: Math.ceil(props.citiesData.length / 4) }).map((item, index) => (
          <li onClick={() => setPage(index + 1)} className={`${page == index + 1 && "!bg-[#0984e3] text-white"} py-2 px-4 rounded-full bg-white text-black cursor-pointer`}>{index + 1}</li>
        ))}
      </ul>

    </>
  )
}
export async function getServerSideProps() {
  const cities = ['tehran', 'moskva', 'texas', 'Berlin', 'london', 'los angeles', 'tokyo', 'Buenos Aires', 'toronto', 'Riyadh', ' Cairo', 'Barcelona', 'paris', 'rome']
  let allData: any = [];

  const getCityData = async (city: string) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0dd4f5dae38f8099b780f8bb28de2d39`);
    const data = await response.json();
    return data
  }

  try {
    const results = await Promise.all(cities.map(city => getCityData(city)));
    results.map(result => {
      allData.push(result);
    });
    console.log(allData);
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      citiesData: allData
    },
  };
}
export default index
