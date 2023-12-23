import envioLogo from "/envio.png";
import "./LogoImage.css";

const LogoImage = () => {
  return (
    <div className="logoImageContainer">
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={envioLogo} className="logo" alt="Vite logo" />
      </a>
    </div>
  );
};

export default LogoImage;
