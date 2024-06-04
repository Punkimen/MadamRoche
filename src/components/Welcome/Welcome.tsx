import logo from "/img/Roche.svg";
import photo from "/img/MadamPhoto.png";
import ScrollAnimation from "react-animate-on-scroll";
import cn from "classnames";
import s from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <section className={s.welcome}>
      <div className={cn("container", s.content)}>
        <div className={s.logo}>
          <ScrollAnimation animateIn="pulse">
            <img src={logo} alt="Roche" />
          </ScrollAnimation>
        </div>
        <div className={s.photo}>
          <ScrollAnimation animateIn="fadeIn">
            <img src={photo} alt="Фото madam Roche" />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
