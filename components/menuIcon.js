import s from "./menuIcon.module.css";
import { useState } from "react";
import cn from "classnames";
export function MenuIcon({ isOpen, setOpen }) {
  return (
    <div
      className={cn(s.navIcon, { [s.open]: isOpen })}
      onClick={() => setOpen()}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
