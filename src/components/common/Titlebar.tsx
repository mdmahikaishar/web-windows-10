"use client";
import React from "react";
import { BiLeftArrow, BiMinus, BiSquareRounded, BiX } from "react-icons/bi";

interface ITitlebar extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  onClose?: () => void;
  onMaximize?: () => void;
  onMinimize?: () => void;
}
export default React.forwardRef(({ name, onClose, onMaximize, onMinimize, ...props }: ITitlebar, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      className={`flex-none h-10 pl-4 flex items-center justify-between select-none transition-all ${
        false ? "bg-gray-800 cursor-move" : "bg-gray-900"
      }`}
      {...props}
      ref={ref}
    >
      {/* left titlebar */}
      <div className="flex items-center gap-2">
        <BiLeftArrow />
        <span className="font-semibold text-sm">{name}</span>
      </div>

      {/* right titlebar */}
      <div className="h-full flex items-center gap-1">
        <button className="h-full w-12 grid place-items-center hover:bg-gray-700" onClick={onMinimize}>
          <BiMinus />
        </button>
        <button className="h-full w-12 grid place-items-center hover:bg-gray-700" onClick={onMaximize}>
          <BiSquareRounded />
        </button>
        <button className="h-full w-12 grid place-items-center hover:bg-red-700" onClick={onClose}>
          <BiX />
        </button>
      </div>
    </div>
  );
});
