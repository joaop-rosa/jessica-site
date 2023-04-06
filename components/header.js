import s from "./header.module.css";
import Image from "next/image";
import { MenuIcon } from "./menuIcon";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useState } from "react";

export function Header() {
  const { isSmallerThan1200, isSmallerThan900 } = useBreakpoint();
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={s.header}>
      {!isSmallerThan1200 ? <h1 className={s.title}>JÉSSICA BIRCK</h1> : null}
      <div className={s.menuWrapper}>
        {isSmallerThan900 ? (
          <MenuIcon
            isOpen={isOpen}
            setOpen={() => setOpen((currentValue) => !currentValue)}
          />
        ) : null}
        {!isSmallerThan900 ? (
          <ul className={s.menu}>
            <li>Quem sou</li>
            <li>Meu trabalho</li>
            <li>Locais de atuação</li>
            <li>Contato</li>
          </ul>
        ) : null}

        <div className={s.menuMediaIcons}>
          <Image src="/whatsapp-icon.svg" width={22} height={22} />
          <Image src="/instagram-icon.svg" width={22} height={22} />
          <Image src="/linkedin-icon.svg" width={22} height={22} />
        </div>
      </div>
    </div>
  );
}
