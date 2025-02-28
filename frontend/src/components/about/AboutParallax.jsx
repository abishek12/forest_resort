import React from "react";
import {HeroParallax}from "../ui/aceternity_ui/parallax";
import { ParallaxBackgroundItem } from "../../localData/ParallaxBackgroundItems";

export function AboutParallax() {
  return <HeroParallax products={ParallaxBackgroundItem}/>
}
