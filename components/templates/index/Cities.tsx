"use client";
import { Cities as CitiesType, City } from "@/Types/city.types";
import Card from "@/components/modules/card/Card";
import Loader from "@/components/modules/loader/Loader";
import useGetData from "@/hooks/useGetData";
import { fetchPopularCityData } from "@/utils/fetchs";
const Cities = () => {
  const { data, isPending } = useGetData<any>(["cities"], fetchPopularCityData);
  return (
    <main>
      <div className="flex justify-center md:flex-wrap sm-x3:gap-10 gap-10 w-[80%] mx-auto md:w-full mt-20">
        {data?.map((city: City) => (
          <Card weatherData={city} key={city.id} city={null} />
        ))}
      </div>
      {isPending && <Loader />}
    </main>
  );
};

export default Cities;
