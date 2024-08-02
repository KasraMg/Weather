"use client";
import { City } from "@/Types/city.types";
import Card from "@/components/templates/explore/Card";
import { useState } from "react";
import useGetData from "@/hooks/useGetData";
import { fetchExplorCityData } from "@/utils/fetchs";
const Cities = () => {
  const [page, setPage] = useState<number>(1);
  const endIndex = 4 * page;
  const startIndex = endIndex - 4;

  const { data } = useGetData<any>(["exploreCities"], fetchExplorCityData);

  return (
    <div>
      <main className="grid-cols-[auto,auto] md:h-full  md:grid-cols-[auto] md:justify-normal md:px-8 md:gap-10 grid gap-20 mt-24 justify-center h-[360px]">
        {data?.slice(startIndex, endIndex).map((city: City) => (
          <Card key={city.id} {...city} />
        ))}
      </main>

      <ul className="flex justify-center relative z-30 mt-32 gap-4 md:pb-10 md:mt-24">
        {Array.from({ length: Math.ceil(data.length / 4) }).map(
          (item, index) => (
            <li
              key={index + 1}
              onClick={() => setPage(index + 1)}
              className={`${
                page == index + 1 && "!bg-[#0984e3] text-white"
              } py-2 px-4 rounded-full bg-white text-black cursor-pointer`}
            >
              {index + 1}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Cities;
