import photo from "@/../public/img/photo_4.jpg";
import lunaPark from "@/../public/img/luna_park_ticket.jpg";
import TextMain from "components/TextMain/TextMain.tsx";
import BtnMenu from "components/BtnMenu/BtnMenu.tsx";
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
        <BtnMenu className={s.btn} />
        <div className={s.photos}>
          <img src={photo} alt="Чб фото детей" />
          <img className={s.ticket} src={lunaPark} alt="Билет в луна-парк" />
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
