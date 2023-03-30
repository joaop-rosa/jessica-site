import s from './banner.module.css'
import Image from 'next/image';

export function Banner() {
    return (
       <div className={s.banner}>
            <div className={s.logo}>
                <Image src='/balance-icon.svg' width={76} height={70}/>
                <h1 className={s.title}>JÉSSICA BIRCK</h1>
                <div className={s.bar}/>
                <h2 className={s.subtitle}>CORRESPONDÊNCIA JURIDICA</h2>
            </div>
       </div>
    )
}