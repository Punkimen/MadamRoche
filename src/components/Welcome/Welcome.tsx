import logo from "@/../public/img/Roche.svg";
import photo from "@/../public/img/MadamPhoto.png";
import s from "./Welcome.module.scss";
import cn from "classnames";

const Welcome = () => {
  return (
    <section className={s.welcome}>
      <div className={cn("container", s.content)}>
        <div className={s.logo}>
          <img src={logo} alt="Roche" />
        </div>
        <div className={s.photo}>
          <img src={photo} alt="Фото madam Roche" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
