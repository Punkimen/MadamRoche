import hieroglyph from "@/../public/img/hieroglyph_2.svg";
import photo from "@/../public/img/photo_3.png";
import interier from "@/../public/img/interier.png";
import TextMain from "components/TextMain/TextMain.tsx";
import s from "./HomeInterier.module.scss";

const HomeInterier = () => {
  return (
    <section className={s.interier}>
      <div className="container">
        <div className={s.photo}>
          <img src={photo} alt="Фото в профиль" />
          <div className={s.decor}>
            <img src={hieroglyph} alt="иероглиф" />
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
