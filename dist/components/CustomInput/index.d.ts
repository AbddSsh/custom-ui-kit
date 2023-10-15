import { FC } from "react";
import "./index.css";
interface CustomInputProps {
    label: string;
    small?: boolean;
    large?: boolean;
    error?: boolean;
    placeholder?: string;
    horizontal?: boolean;
}
export declare const CustomInput: FC<CustomInputProps>;
export {};
