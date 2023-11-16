import Card from "@/components/modules/card/Card";

const Cities = (props: any) => {
    console.log(props);

    return (
        <main>
            <div className="flex justify-center md:flex-wrap sm-x3:gap-10 gap-10 w-[80%] mx-auto md:w-full mt-20">
                {props.citiesData.map((city: any) => (
                    <Card weatherData={...city} city={null} />
                ))} 

            </div>
        </main>
    )
}

export default Cities 