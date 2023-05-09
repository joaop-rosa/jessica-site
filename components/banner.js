import s from "./banner.module.css";
import Image from "next/image";
import { useState } from "react";

export function Banner({ currentRef }) {
  const [width] = useState(462);
  const [height] = useState(279);

  return (
    <div ref={currentRef} className={s.banner}>
      <div className={s.logo}>
        <img
          src="/logo.png"
          alt="Logo Jéssica Birck Correpondência Jurídica"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}
