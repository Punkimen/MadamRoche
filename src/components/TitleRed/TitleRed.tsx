import hieroglyph from "@/../public/img/hieroglyph_1.svg";
import s from "./TitleRed.module.scss";
import {Parallax} from "react-scroll-parallax";

const TitleRed = () => {
  return (
    <section className={s.block}>
      <h1 className={s.title}>The guest house of the mysterious Asian woman in the heart of the Eurasian world</h1>
      <div className={s.decor}>
        <Parallax speed={20}>
          <img src={hieroglyph} alt="hieroglyph" />
        </Parallax>
      </div>
    </section>
  );
};

export default TitleRed;
