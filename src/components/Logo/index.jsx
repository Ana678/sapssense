import logoImg from "../../assets/logo_sapssense.svg"

export const Logo = ({ width = "64", height = "64" }) => {
  return (
    <img
    src={logoImg}
    alt="Logo"
    style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}
