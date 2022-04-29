import React, { useContext } from "react";
import Image from "./Image";

import { ImageContext } from "../context/ImageContext";
import Loading from "./Loading";

const RenderImageFeed = () => {
  const { state } = useContext(ImageContext);

  if (state.isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Image />
    </>
  );
};

export default RenderImageFeed;
