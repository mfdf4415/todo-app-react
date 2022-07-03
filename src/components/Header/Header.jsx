import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import Style from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={Style.header}>
      <h1 className={Style.logo}>TODO LIST</h1>
      <p className={Style.desc}>add your daily work and do it better</p>
      <div className={Style.icons}>
        <a target="blank" href="https://www.instagram.com/mo7ammad_4415/">
          <BsInstagram />
        </a>
        <a target="blank" href="https://github.com/mfdf4415">
          <BsGithub />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/mohammad-fathi-97012121b/"
        >
          <BsLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Header;
