import { Cities, City } from "@/Types/city.types";
import Card from "@/components/modules/card/Card";

const Cities = (props: Cities) => { 
    return (
        <main>
            <div className="flex justify-center md:flex-wrap sm-x3:gap-10 gap-10 w-[80%] mx-auto md:w-full mt-20">
                {props.citiesData.map((city: City) => (
                    <Card weatherData={city} key={city.id} city={null} />
                ))} 

            </div>
        </main>
    )
}

export default Cities 