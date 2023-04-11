import s from "./header.module.css";
import { MenuIcon } from "./menuIcon";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useEffect, useState } from "react";
import cn from "classnames";
import InstagramIcon from "/public/static/instagram-icon.svg";
import WhatsappIcon from "/public/static/whatsapp-icon.svg";
import LinkedinIcon from "/public/static/linkedin-icon.svg";

export function Header({ refs }) {
  const { isSmallerThan1200, isSmallerThan900 } = useBreakpoint();
  const [isOpen, setOpen] = useState(false);
  const { banner, about, work, places, contact } = refs;
  const [isInitial, setInitial] = useState(true);

  const handleScroll = (ref) => {
    const targetPosition = ref.current.offsetTop - 80;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    function checkInitial() {
      const currentPosition = window.scrollY;

      if (currentPosition === 0) {
        setInitial(true);
      } else {
        setInitial(false);
      }
    }

    window.addEventListener("scroll", checkInitial);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function renderMenuItems() {
    return (
      <ul className={s.menu}>
        <li
          onClick={() => {
            handleScroll(about);
            setOpen(false);
          }}
        >
          Quem sou
        </li>
        <li
          onClick={() => {
            handleScroll(work);
            setOpen(false);
          }}
        >
          Meu trabalho
        </li>
        <li
          onClick={() => {
            handleScroll(places);
            setOpen(false);
          }}
        >
          Locais de atuação
        </li>
        <li
          onClick={() => {
            handleScroll(contact);
            setOpen(false);
          }}
        >
          Contato
        </li>
      </ul>
    );
  }

  return (
    <div className={cn(s.header, { [s.hasBoxShadow]: !isInitial && !isOpen })}>
      {!isSmallerThan1200 ? (
        <h1 className={s.title} onClick={() => handleScroll(banner)}>
          JÉSSICA BIRCK
        </h1>
      ) : null}
      <div className={s.menuWrapper}>
        {isSmallerThan900 ? (
          <MenuIcon
            isOpen={isOpen}
            setOpen={() => setOpen((currentValue) => !currentValue)}
          />
        ) : null}
        {!isSmallerThan900 ? renderMenuItems() : null}

        <div className={s.menuMediaIcons}>
          <a
            href="https://wa.me/5551998431851"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon className={s.icon} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={s.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/jessica-sabrina-birck-024122235/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className={s.icon} />
          </a>
        </div>
      </div>
      {isOpen ? <div className={s.menuMobile}>{renderMenuItems()}</div> : null}
    </div>
  );
}
