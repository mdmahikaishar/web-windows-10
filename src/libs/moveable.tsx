import React, { MutableRefObject, useRef } from "react";

export function useMoveable(move: MutableRefObject<HTMLDivElement>) {
  const moving = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  // const [pos, setPos] = useState({ x: 50, y: 80 });

  const onMove = (e: React.MouseEvent) => {
    if (!moving.current) return;

    let currentX = e.clientX - lastPos.current.x;
    let currentY = e.clientY - lastPos.current.y;

    // setPos({ x: currentX, y: currentY });
    move.current.style.left = `${currentX}px`;
    move.current.style.top = `${currentY}px`;
  }

  const onDown = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();

    let currentX = e.clientX - rect.x;
    let currentY = e.clientY - rect.y;
    
    moving.current = true;
    lastPos.current = { x: currentX, y: currentY };        
  }
  
  const onUp = () => {
    moving.current = false;
    lastPos.current = { x: 0, y: 0 };
  }

  return { onMouseMove: onMove, onMouseDown: onDown, onMouseUp: onUp, onMouseLeave: onUp }
}