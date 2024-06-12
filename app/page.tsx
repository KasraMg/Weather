import Main from "@/components/templates/index/Main";
import Cities from "@/components/templates/index/Cities";
import { Cities as CitiesType } from "@/Types/city.types";
import Head from "next/head";

const index = (citiesData: CitiesType) => {
  const cities: string[] = ["tehran", "moskva", "texas", "Berlin", "london"];
  let allData: CitiesType[] = [];

  const getCityData = async (city: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0dd4f5dae38f8099b780f8bb28de2d39`
    );
    const data = await response.json();
    return data;
  };

  const test = async () => {
    try {
      const results = await Promise.all(
        cities.map((city: string) => getCityData(city))
      );
      results.map((result) => {
        allData.push(result);
      });
      console.log(allData);
    } catch (error) {
      console.error(error);
    }
  };
  test();
  return (
    <>
      {/* <Head>
        <title>Storm Seeker</title>
      </Head>
      <Main />
      <Cities {...citiesData} /> */}
      <p>test</p>
    </>
  );
};

export default index;
