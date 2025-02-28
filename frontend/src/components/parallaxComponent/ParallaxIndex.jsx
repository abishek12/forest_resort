import React from "react";
import { ParallaxBackgroundItem } from "../../localData/ParallaxBackgroundItems";
import FrontComponent from "./FrontComponent";
import BackComponent from "./BackComponent";

const ParallaxIndex = () => {
  return <BackComponent products={ParallaxBackgroundItem} />
}
export default ParallaxIndex;
