import s from "./banner.module.css";
import Image from "next/image";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useEffect, useState } from "react";

export function Banner({ currentRef }) {
  const [width, setWidth] = useState(462);
  const [height, setHeight] = useState(279);

  return (
    <div ref={currentRef} className={s.banner}>
      <div className={s.logo}>
        <Image src="/logo.png" width={width} height={height} />
      </div>
    </div>
  );
}
