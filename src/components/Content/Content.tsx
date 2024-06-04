import TextMain from "@/components/TextMain/TextMain.tsx";
import photo from "/img/photo_1.png";
import ticket from "/img/ticket.png";
import {Parallax} from "react-scroll-parallax";
import ScrollAnimation from "react-animate-on-scroll";
import s from "./Content.module.scss";

const Content = () => {
  return (
    <section className={s.content}>
      <div className="container">
        <TextMain className={s.text}>
          <p>
            Атмосферный бордель на Олдрич-стрит был домом для мафиози, чиновников, коллекционеров, богачей Гонконга и
            гостей мегаполиса. Особняк изобиловал опиумом, дурманящими напитками и роскошными азиатками — лучшими в
            городе.
          </p>
          <p>
            В конце пути, из-за ужесточения законов, смены власти и преображения социальной среды, как и многие
            проститутки, Roche — просветлела. С&nbsp;этого самого момента всю свою энергию, открывшиеся знания и время
            она посвятила изучению культуры высокой кухни.
          </p>
        </TextMain>
        <div className={s.photos}>
          <ScrollAnimation animateIn="fadeIn">
            <div className={s.photo}>
              <Parallax speed={5}>
                <img src={photo} alt="photo madam" />
              </Parallax>
            </div>
          </ScrollAnimation>
          <div className={s.ticket}>
            <Parallax speed={-5}>
              <ScrollAnimation animateIn="fadeIn">
                <img src={ticket} alt="photo ticket" />
              </ScrollAnimation>
            </Parallax>
          </div>
        </div>
      </div>
      <TextMain className={s.text_1}>
        <p>
          Бурное прошлое наложило на ее дом-ресторан некоторые особенности: она всегда не против как следует выпить и
          станцевать с гостями под лучшую эклектичную музыку со всего света.
        </p>
      </TextMain>
    </section>
  );
};

export default Content;
