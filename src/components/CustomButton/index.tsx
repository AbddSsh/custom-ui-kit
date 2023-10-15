import React, { FC, ReactNode } from "react";
import "./index.css";
import { BtnHover } from "../../motion";

interface CustomButtonProps {
  children: ReactNode;
  color?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  fz?: number;
  fontWeight?: number;
  small?: boolean;
  large?: boolean;
  outlined?: boolean;
  errored?: boolean;
  successed?: boolean;
}

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  color,
  backgroundColor,
  padding,
  fz,
  fontWeight,
  borderRadius,
  small,
  large,
  outlined,
  errored,
  successed,
}) => {
  const rootClasses = ["btn"];
  if (large) {
    rootClasses.push("btn_large");
  } else if (small) {
    rootClasses.push("btn_small");
  } else if (outlined) {
    rootClasses.push("btn_outlined");
  } else if (errored) {
    rootClasses.push("btn_errored");
  } else if (successed) {
    rootClasses.push("btn_successed");
  }
  return (
    <BtnHover>
      <button
        className={rootClasses.join(" ")}
        style={{
          color,
          backgroundColor,
          padding: padding,
          borderRadius: borderRadius,
          fontSize: `${fz}px`,
          fontWeight: `${fontWeight}`,
        }}
      >
        {children}
      </button>
    </BtnHover>
  );
};
