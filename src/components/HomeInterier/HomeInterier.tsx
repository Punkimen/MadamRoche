import hieroglyph from "/img/hieroglyph_2.svg";
import photo from "/img/photo_3.png";
import interier from "/img/interier.png";
import TextMain from "@/components/TextMain/TextMain.tsx";
import {Parallax} from "react-scroll-parallax";
import ScrollAnimation from "react-animate-on-scroll";
import s from "./HomeInterier.module.scss";
const HomeInterier = () => {
  return (
    <section className={s.interier}>
      <div className="container">
        <div className={s.photo}>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <img src={photo} alt="Фото в профиль" />
          </ScrollAnimation>
          <div className={s.decor}>
            <Parallax speed={-10}>
              <img src={hieroglyph} alt="иероглиф" />
            </Parallax>
          </div>
        </div>
        <TextMain className={s.text}>
          <p>
            Дом Madame Roche это гостеприимный 5-звездочный гастрономический бутик-отель, в котором нельзя
            лишь&nbsp;остаться для сна.
          </p>
        </TextMain>
      </div>
      <div className={s["big-photo"]}>
        <img src={interier} alt="Фото интерьера" />
      </div>
    </section>
  );
};

export default HomeInterier;
