import CurrenCityDatas from "@/components/templates/search/CurrenCityDatas";
import WeaklyCityDatas from "@/components/templates/search/WeaklyCityDatas";
import { GetServerSidePropsContext } from "next";


const search = ({ currentWeatherData, WeeklyWeatherData }: any) => {
    console.log(currentWeatherData);
    console.log(WeeklyWeatherData);

    return (
        <>
            <CurrenCityDatas  {...currentWeatherData} />
            <WeaklyCityDatas  {...WeeklyWeatherData} />
        </>
    )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context;

    const CurrentData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params?.id}&appid=0dd4f5dae38f8099b780f8bb28de2d39`
    );
    const resCurrentData = await CurrentData.json();
    console.log(resCurrentData);

    if (resCurrentData.cod == 404 || resCurrentData.cod == 400) {
        return {
            redirect: { destination: "/404" },
        };
    }
    const Weekly_data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${resCurrentData.coord.lat}&lon=${resCurrentData.coord.lon}&appid=0dd4f5dae38f8099b780f8bb28de2d39`
    );
    const resWeeklyData = await Weekly_data.json();
    return {
        props: {
            currentWeatherData: resCurrentData,
            WeeklyWeatherData: resWeeklyData
        },
    };
}
export default search

