import Main from "@/components/templates/index/Main";
import Cities from "@/components/templates/index/Cities";
import Hydrated from "@/providers/Hydrated";
import { fetchPopularCityData } from "@/utils/fetchs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "City Weather",
};

const IndexPage = () => {
  return (
    <>
      <Main />
      <Hydrated queryKey={["cities"]} queryFn={fetchPopularCityData}>
        <Cities />
      </Hydrated>
    </>
  );
};

export default IndexPage;
