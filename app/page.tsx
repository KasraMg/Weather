import React from "react";
import Main from "@/components/templates/index/Main";
import Cities from "@/components/templates/index/Cities"; 
import Head from "next/head"; 
import Hydrated from "@/providers/Hydrated"; 
import { fetchCityData } from "@/utils/fetchs";

 
const IndexPage = () => {
 
  return (
    <>
      <Head>
        <title>City Weather</title>
      </Head>
      <Main />
      <Hydrated queryKey={["cities"]} queryFn={fetchCityData}>
           <Cities /> 
      </Hydrated>
    
    </> 
  );
};

export default IndexPage;
