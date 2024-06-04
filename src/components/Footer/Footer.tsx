import logo from "/img/Roche.svg";
import cn from "classnames";
import TextMain from "@/components/TextMain/TextMain.tsx";
import ScrollAnimation from "react-animate-on-scroll";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={cn("container", s.wrapper)}>
        <ScrollAnimation animateIn="pulse">
          <img className={s.logo} src={logo} alt="Roche" />
        </ScrollAnimation>
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
