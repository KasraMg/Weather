"use client";
import Details from "@/components/templates/search/Details";
import Slider from "@/components/templates/search/Slider";
import Head from "next/head";
import useGetData from "@/hooks/useGetData";
import { useParams } from "next/navigation";
import { cityWeeklyDatas, fetchCity } from "@/utils/fetchs";
import Loader from "@/components/modules/Loader/Loader"; 

const Search = () => {
  const params = useParams();
  const { data } = useGetData<any>(["city", params.id], () =>
    fetchCity(params.id as string)
  );
  const { data: weeklyData, isPending } = useGetData<any>(
    ["cityWeekly", params.id],
    () => cityWeeklyDatas(data.coord.lat, data.coord.lon)
  );
  document.title = params.id as string;

  return (
    <>
      <Head>
        <title>Support</title>
      </Head>
      {data && data.name && weeklyData ? (
        <Details {...data} />
      ) : (
        <div className="flex flex-col justify-center items-center h-[70vh] z-50 relative">
          {data?.cod == 404 && !isPending && (
            <>
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/dotty/100/nothing-found.png"
                alt="nothing-found"
              />
              <p>A city with this name was not found</p>
            </>
          )}
        </div>
      )}
      {weeklyData && <Slider {...weeklyData} />}
      {isPending && <Loader />}
    </>
  );
};

export default Search;
