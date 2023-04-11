import s from "./footer.module.css";
import BalanceIcon from "/public/static/balance-icon.svg";

export function Footer({ bannerRef }) {
  const handleScroll = (ref) => {
    const targetPosition = ref.current.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={() => handleScroll(bannerRef)} className={s.footerWrapper}>
      <BalanceIcon className={s.icon} />
      <h1 className={s.title}>JÉSSICA BIRCK</h1>
    </div>
  );
}
