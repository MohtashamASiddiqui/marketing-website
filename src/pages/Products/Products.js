import React from "react";
import { homeObjFour, homeObjThree } from "./Data";
import { InfoSection } from "../../components";
import Pricing from "../../components/Pricing/Pricing";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
