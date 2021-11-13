import React from "react";
import Intro from "./parts/Intro";
import Price from "./parts/price/Price";
import Video from "./parts/video/Video";
import Why from "./parts/why/Why";

export default function Main() {
  return (
    <>
      <Intro />
      <Video />
      <Why />
      <Price />
    </>
  );
}
