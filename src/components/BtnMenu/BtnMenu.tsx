import s from "./BtnMenu.module.scss";
import cn from "classnames";

const BtnMenu = ({className}: {className?: string}) => {
  return <button className={cn(s.btn, className)}>Menu</button>;
};

export default BtnMenu;
