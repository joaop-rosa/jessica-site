import s from './header.module.css'
import Image from 'next/image';

export function Header() {
    return (
       <div className={s.header}>
            <h1 className={s.title}>JÉSSICA BIRCK</h1>
            <div className={s.menuWrapper}>
                <ul className={s.menu}>
                    <li>Quem sou</li>
                    <li>Meu trabalho</li>
                    <li>Locais de atuação</li>
                    <li>Contato</li>
                </ul>
                <div className={s.menuMediaIcons}>
                    <Image src='/whatsapp-icon.svg' width={22} height={22}/>
                    <Image src='/instagram-icon.svg' width={22} height={22}/>
                    <Image src='/linkedin-icon.svg' width={22} height={22}/> 
                </div>
            </div>
       </div>
    )
}