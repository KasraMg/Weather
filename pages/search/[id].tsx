import Results from "@/components/templates/search/Results";
import { GetServerSidePropsContext } from "next";


const search = ({ weatherData }: any) => {
    console.log(weatherData);

    return  <Results  {...weatherData}/>
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params?.id}&appid=0dd4f5dae38f8099b780f8bb28de2d39`
    );
    const data = await res.json();
    console.log(data);

    if (data.cod == 404) {
        return { 
            redirect: { destination: "/" },
        };
    }

    return {
        props: {
            weatherData: data,
        },
    };
}
export default search
