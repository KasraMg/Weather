import Cities from "@/components/templates/explore/Cities";
import Hydrated from "@/providers/Hydrated";
import { fetchExplorCityData } from "@/utils/fetchs";  
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore",
  description: "explore cities weather",
};

const Explore = () => {
  return <Cities />  
};

export default Explore;
