import { MdLocationOn } from 'react-icons/md'
const Results = (props: any) => {
    console.log(props);

    return (
        <main className="z-30 relative pt-20 px-8">
            <div className="text-2xl space-y-2">
                <div className="text-4xl mb-8 flex items-center">
                    <MdLocationOn />
                    <p> {props.name}, {props.sys?.country}</p>
                </div>
                <p>wind: 5 mph</p>
                <p>visibility: 8000</p>
                <p>feels_like: 286.76</p>
                <p>humidity: 44%</p>
                <p></p>
            </div>
            <div></div>
        </main>
    )
}

export default Results
