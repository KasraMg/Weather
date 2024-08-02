"use client"
import {  Cities as CitiesType , City } from "@/Types/city.types";
import Card from "@/components/modules/card/Card";
import useGetData from "@/hooks/useGetData"; 
import { fetchCityData } from "@/utils/fetchs";
const Cities = () => { 
  const { data, status, isLoading } = useGetData<any>(["cities"], fetchCityData);
    console.log(data);
    
    return (
        <main>
            <div className="flex justify-center md:flex-wrap sm-x3:gap-10 gap-10 w-[80%] mx-auto md:w-full mt-20">
                {data.map((city: City) => (
                    <Card weatherData={city} key={city.id} city={null} />
                ))} 

            </div>
        </main>
    )
}

export default Cities 