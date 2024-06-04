import {ChildrenType} from "../../../types/main.types.ts";
import {FC} from "react";
import cn from "classnames";
import ScrollAnimation from "react-animate-on-scroll";
import s from "./TextMain.module.scss";

interface ITextMain {
  children: ChildrenType;
  className?: string;
}

const TextMain: FC<ITextMain> = ({children, className}) => {
  return (
    <div className={cn(s.text, className && className)}>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        {children}
      </ScrollAnimation>
    </div>
  );
};

export default TextMain;
