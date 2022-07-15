/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Text for the label
     */
    label: string;
    /**
     * Size of font
     */
    size: "normal" | "h1" | "h2" | "h3" | "h4";
    /**
     * color of font
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     *  AllCaps all font
     */
    allCaps?: boolean;
    /**
     * color of font
     */
    fontColor?: string;
    /**
     * Background color of font
     */
    fontBackground?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, fontBackground, }: MyLabelProps) => JSX.Element;
