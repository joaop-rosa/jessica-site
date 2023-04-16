import s from "./contact.module.css";
import MailIcon from "/public/static/mail-icon.svg";
import InstagramIcon from "/public/static/instagram-icon.svg";
import WhatsappIcon from "/public/static/whatsapp-icon.svg";
import LinkedinIcon from "/public/static/linkedin-icon.svg";
import {
  EMAIL_ADREESS,
  INSTAGRAM_LINK,
  INSTAGRAM_NICKNAME,
  LINKEDIN_LINK,
  PHONE_NUMBEM,
  WHATSAPP_LINK,
} from "../constants/contacts";

export function Contact({ currentRef }) {
  return (
    <div ref={currentRef} className={s.contactWrapper}>
      <h1 className={s.title}>CONTATO</h1>
      <p className={s.text}>Para contato tenho as opções abaixo:</p>
      <div className={s.contactItems}>
        <a className={s.contactItem}>
          <MailIcon className={s.icon} />
          <p className={s.contactItemText}>{EMAIL_ADREESS}</p>
        </a>
        <a href={WHATSAPP_LINK} className={s.contactItem}>
          <WhatsappIcon className={s.icon} />
          <p className={s.contactItemText}>{PHONE_NUMBEM}</p>
        </a>
        <a href={LINKEDIN_LINK} className={s.contactItem}>
          <LinkedinIcon className={s.icon} />
          <p className={s.contactItemText}>Jessica Sabrina Birck</p>
        </a>
        <a href={INSTAGRAM_LINK} className={s.contactItem}>
          <InstagramIcon className={s.icon} />
          <p className={s.contactItemText}>{INSTAGRAM_NICKNAME}</p>
        </a>
      </div>
    </div>
  );
}
