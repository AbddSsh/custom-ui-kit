import React, { FC } from "react";
import "./index.css";

interface ImgWrapperProps {
  url: string;
  alt: string;
}

export const ImgWrapper: FC<ImgWrapperProps> = ({ url, alt }) => {
  return (
    <div className="img_wrapper">
      <img className="image" src={url} alt={alt} />
    </div>
  );
};
