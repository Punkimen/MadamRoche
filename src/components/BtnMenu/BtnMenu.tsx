import s from "./BtnMenu.module.scss";
import cn from "classnames";
import {useEffect, useRef, useState} from "react";

const BtnMenu = ({className}: {className?: string}) => {
  const btn: React.RefObject<HTMLButtonElement> = useRef(null);
  const posRef = useRef<{x: number; y: number}>({x: 0, y: 0});
  const [pos, setPos] = useState<{x: number; y: number}>({x: 0, y: 0});
  const ease = 0.06;
  const changePos = (e: React.MouseEvent) => {
    if (btn.current) {
      const rect = btn.current.getBoundingClientRect();
      const targetX = e.clientX - rect.x - rect.width / 2;
      const targetY = e.clientY - rect.y - rect.height / 2;

      const updatePosition = () => {
        setPos((prevPos) => ({
          x: prevPos.x + (targetX - prevPos.x) * ease,
          y: prevPos.y + (targetY - prevPos.y) * ease,
        }));
      };

      requestAnimationFrame(updatePosition);
    }
  };

  const resetPos = () => {
    const resetLoop = () => {
      setPos((prevPos) => ({
        x: prevPos.x * (1 - ease),
        y: prevPos.y * (1 - ease),
      }));

      if (Math.abs(posRef.current.x) > 0.1 || Math.abs(posRef.current.y) > 0.1) {
        requestAnimationFrame(resetLoop);
      } else {
        setPos({x: 0, y: 0});
      }
    };
    requestAnimationFrame(resetLoop);
  };

  useEffect(() => {
    posRef.current = pos; // Update the ref with the latest pos value
  }, [pos]);

  useEffect(() => {
    return () => setPos({x: 0, y: 0});
  }, []);

  return (
    <button
      className={cn(s.btn, className)}
      onMouseEnter={() => setPos({x: 0, y: 0})}
      onMouseMove={(e) => {
        changePos(e);
      }}
      onMouseLeave={() => {
        resetPos();
      }}
      ref={btn}
    >
      <span
        style={{
          transform: `translate3d(${pos.x / 1.5}px, ${pos.y / 1.5}px, 0)`,
        }}
      >
        Menu
      </span>
    </button>
  );
};

export default BtnMenu;
