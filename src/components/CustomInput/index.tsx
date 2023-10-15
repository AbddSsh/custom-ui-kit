import React, { FC } from "react";
import "./index.css";

interface CustomInputProps {
  label: string;
  small?: boolean;
  large?: boolean;
  error?: boolean;
  placeholder?: string;
  horizontal?: boolean;
}

export const CustomInput: FC<CustomInputProps> = ({
  label,
  small,
  large,
  placeholder,
  error,
  horizontal,
}) => {
  const rootClasses = ["custom_input"];
  if (small) {
    rootClasses.push("input_small");
  } else if (large) {
    rootClasses.push("input_large");
  } else if (error) {
    rootClasses.push("input_error");
  }
  return (
    <label
      className={horizontal ? "input_label input_horizontal" : "input_label"}
    >
      {label}
      <input className={rootClasses.join(" ")} placeholder={placeholder} />
    </label>
  );
};
