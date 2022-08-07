import React from "react";
import "./PictureList.css";
import ImageCard from "./ImageCard";

// while giving key to the element give to the root element of it
const PicList = ({ pics }) => {
  const pictures = pics.map((pic) => {
    return <ImageCard key={pic.id} pic={pic} />;
  });
  return <div className="picture-list">{pictures}</div>;
};

export default PicList;
