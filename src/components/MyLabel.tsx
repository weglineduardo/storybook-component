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
export const MyLabel = ({
  label = "no label",
  size = "normal",
  allCaps = true,
  color = "primary",
  fontColor = "",
  fontBackground = "yellow",
}: MyLabelProps) => {
  return (
    <span
      style={{ color: fontColor, background: fontBackground }}
      className={`label ${size} text-${color}`}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
//para aumentar la compatibilidad el paquete en npm hacemos exportacion por defecto
export default MyLabel;
