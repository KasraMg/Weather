import Cities from "@/components/templates/explore/Cities";
import Hydrated from "@/providers/Hydrated";
import { fetchExplorCityData } from "@/utils/fetchs";
import Head from "next/head";
const Explore = () => {
  return (
    <>
      <Head>
        <title>Explore</title>
        <meta name="description" content="explore cities weather" />
      </Head>
      <Hydrated queryKey={["exploreCities"]} queryFn={fetchExplorCityData}>
        <Cities />
      </Hydrated>
    </>
  );
};

export default Explore;
