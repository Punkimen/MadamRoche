import photo from "/img/photo_4.jpg";
import lunaPark from "/img/luna_park_ticket.jpg";
import TextMain from "@/components/TextMain/TextMain.tsx";
import BtnMenu from "@/components/BtnMenu/BtnMenu.tsx";
import {Parallax} from "react-scroll-parallax";
import ScrollAnimation from "react-animate-on-scroll";
import s from "./Menu.module.scss";

const Menu = () => {
  return (
    <section className={s.menu}>
      <div className="container">
        <TextMain className={s.text}>
          <p>
            Основное меню представлено актуальным и авторским comfort-food, построенным на захватывающих вкусовых
            сочетаниях соусов и высококачественных овощах, мясе и морепродуктах.
          </p>
        </TextMain>
        <ScrollAnimation animateIn="pulse">
          <BtnMenu href="/MadamRoche/Roche_bar_menu.pdf" className={s.btn} />
        </ScrollAnimation>
        <div className={s.photos}>
          <img src={photo} alt="Чб фото детей" />
          <div className={s.ticket}>
            <Parallax speed={10}>
              <img src={lunaPark} alt="Билет в луна-парк" />
            </Parallax>
          </div>
        </div>
        <TextMain className={s.text}>
          <p>
            Основное меню представлено актуальным и авторским comfort-food, построенным на захватывающих вкусовых
            сочетаниях соусов и высококачественных овощах, мясе и морепродуктах.
          </p>
        </TextMain>
      </div>
    </section>
  );
};

export default Menu;
