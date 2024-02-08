import envioLogo from "/envio.png";
import "./LogoImage.css";
import { Link } from "react-router-dom";

const LogoImage = () => {
  return (
    <div className="logoImageContainer">
      <Link to="/"  rel="noreferrer">
        <img src={envioLogo} className="logo" alt="Vite logo" />
      </Link>
    </div>
  );
};

export default LogoImage;
