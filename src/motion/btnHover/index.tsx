import React, { ReactNode } from "react";
import "./index.css";

export const BtnHover = ({ children }: { children: ReactNode }) => {
  return <div className="btn-hover">{children}</div>;
};
