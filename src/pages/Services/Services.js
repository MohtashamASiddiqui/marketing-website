import React from "react";
import { homeObjFour } from "./Data";
import { InfoSection } from "../../components";
import Pricing from "../../components/Pricing/Pricing";

const Home = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
