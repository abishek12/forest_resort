import React from "react";
<<<<<<< HEAD
import {HeroParallax}from "../ui/aceternity_ui/parallax";
import { ParallaxBackgroundItem } from "../../localData/ParallaxBackgroundItems";

export function AboutParallax() {
  return <HeroParallax products={ParallaxBackgroundItem}/>
}
=======
import { HeroParallax } from "../ui/aceternity_ui/parallax";

export function AboutParallax() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Swimming Pool",
    thumbnail: "/img/fsa_image/swim1.webp",
  },
  {
    title: "Library",
    thumbnail: "/img/fsa_image/book.webp",
  },
  {
    title: "Futsal",
    thumbnail: "/img/fsa_image/futsal.webp",
  },
  {
    title: "Swimming",
    thumbnail: "/img/fsa_image/swim1.webp",
  },

  {
    title: "Swimming Pool",
    thumbnail: "/img/fsa_image/swim2.jpeg",
  },
  {
    title: "Swim",
    thumbnail: "/img/fsa_image/swim3.webp",
  },
  {
    title: "Swim in Nature",
    thumbnail: "/img/fsa_image/swim4.webp",
  },
  {
    title: "Swimmer",
    thumbnail: "/img/fsa_image/swim2.jpeg",
  },
  {
    title: "Swin in Nature",
    thumbnail: "/img/fsa_image/swim3.webp",
  },
];
>>>>>>> 1b623ca2972a84a66c8d67f2e26d4e2af8aeff60
