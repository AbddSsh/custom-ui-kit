import { FC, ReactNode } from "react";
import "./style.css";
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
export declare const CustomButton: FC<CustomButtonProps>;
export {};
