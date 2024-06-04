import hieroglyph from "/img/hieroglyph_1.svg";
import {Parallax} from "react-scroll-parallax";
import ScrollAnimation from "react-animate-on-scroll";
import s from "./TitleRed.module.scss";

const TitleRed = () => {
  return (
    <section className={s.block}>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} animatePreScroll={false} delay={100}>
        <h1 className={s.title}>The guest house of the mysterious Asian woman in the heart of the Eurasian world</h1>
      </ScrollAnimation>
      <div className={s.decor}>
        <Parallax speed={20}>
          <img src={hieroglyph} alt="hieroglyph" />
        </Parallax>
      </div>
    </section>
  );
};

export default TitleRed;
