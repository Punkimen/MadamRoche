import s from "./Footer.module.scss";
import logo from "@/../public/img/Roche.svg";
import cn from "classnames";
import TextMain from "components/TextMain/TextMain.tsx";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={cn("container", s.wrapper)}>
        <img className={s.logo} src={logo} alt="Roche" />
        <TextMain className={s.text}>
          <p>Основное меню представлено актуальным и авторским comfort-food</p>
        </TextMain>
        <div className={s.links}>
          <a href="#" className="link">
            Telegram
          </a>
          <a href="#" className="link">
            Whatsapp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
