import s from "./contact.module.css";
import MailIcon from "/public/static/mail-icon.svg";
import InstagramIcon from "/public/static/instagram-icon.svg";
import WhatsappIcon from "/public/static/whatsapp-icon.svg";
import LinkedinIcon from "/public/static/linkedin-icon.svg";

export function Contact({ currentRef }) {
  return (
    <div ref={currentRef} className={s.contactWrapper}>
      <h1 className={s.title}>CONTATO</h1>
      <p className={s.text}>Para contato tenho as opções abaixo:</p>
      <div className={s.contactItems}>
        <div className={s.contactItem}>
          <MailIcon className={s.icon} />
          <p className={s.contactItemText}>jsabrinabirck@hotmail.com</p>
        </div>
        <div className={s.contactItem}>
          <WhatsappIcon className={s.icon} />
          <p className={s.contactItemText}>(51) 9 9843-1851</p>
        </div>
        <div className={s.contactItem}>
          <LinkedinIcon className={s.icon} />
          <p className={s.contactItemText}>Jessica Sabrina Birck</p>
        </div>
        <div className={s.contactItem}>
          <InstagramIcon className={s.icon} />
          <p className={s.contactItemText}>@adv.jessicabirck</p>
        </div>
      </div>
    </div>
  );
}
