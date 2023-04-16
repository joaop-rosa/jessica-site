import { useEffect, useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import s from "./whoAmi.module.css";
import Image from "next/image";
import cn from "classnames";

export function WhoAmi({ currentRef }) {
  const { isSmallerThan900 } = useBreakpoint();
  const [width, setWidth] = useState(342);
  const [height, setHeight] = useState(449);

  useEffect(() => {
    if (isSmallerThan900) {
      setWidth(256);
      setHeight(337);
    } else {
      setWidth(342);
      setHeight(449);
    }
  }, [isSmallerThan900]);

  return (
    <div ref={currentRef} className={s.whoAmiWrapper}>
      <h1 className={s.title}>QUEM SOU</h1>
      <Image
        alt="Foto de Jéssica Birck"
        className={s.photo}
        src="/photo.png"
        width={width}
        height={height}
        sizes="(max-width: 900px)"
      />

      <p className={cn(s.text, s.firstParagrafh)}>
        Bacharelanda de Direito pela Universidade Feevale, atualmente no 10º
        semestre do curso e aprovada no XXXVI Exame de Ordem do Advogados do
        Brasil.
      </p>

      <p className={s.text}>
        Durante minha trajetória, estagiei em escritório de advocacia na área
        civil durante 2 anos, onde pude adquirir grande noção do cotidiano
        jurídico, desenvolvendo petições, acordos, cobranças e tendo acesso a
        realidade forense.
      </p>
      <p className={s.text}>
        Atuei igualmente como DPO (Data Protection Officer) em provedor de
        internet, auxiliando na implementação da Lei Geral de Proteção de Dados
        nos diversos setores da empresa.
      </p>

      <p className={s.text}>
        E, atualmente, minha dedicação é exclusivamente voltada para realização
        de diligências judiciais e extrajudiciais através da atuação como
        correspondente jurídico, trabalho no qual busco contribuir tanto para
        meu desenvolvimento pessoal e profissional, como no desenvolvimento da
        empresa que eu tiver a oportunidade de prestar meus serviços
      </p>
      <p className={s.text}>
        Acredito que através de uma relação saudável junto ao contratante,
        baseada sempre na confiança e transparência, todos teremos benefícios,
        não apenas através da contenção de gastos financeiros, mas também com a
        celeridade e agilidade dos atos diligenciais.
      </p>
    </div>
  );
}
