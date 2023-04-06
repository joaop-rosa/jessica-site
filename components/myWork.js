import cn from "classnames";
import s from "./myWork.module.css";
import { WorkList } from "./workList";
import CourtIcon from "/public/static/court-icon.svg";

const WORK_LIST = [
  {
    Icon: CourtIcon,
    description: "Audiência como preposto",
  },
  {
    Icon: CourtIcon,
    description: "Solicitações de certidões",
  },
  {
    Icon: CourtIcon,
    description: "Solicitações de certidões",
  },
  {
    Icon: CourtIcon,
    description: "Entrega e retirada de documentos",
  },
  {
    Icon: CourtIcon,
    description: "Serviços Cartorários",
  },
  {
    Icon: CourtIcon,
    description: "Entrega de Notificações",
  },
  {
    Icon: CourtIcon,
    description: "Acompanhamento de Processos",
  },
  {
    Icon: CourtIcon,
    description: "Protocolos Físicos e Eletrônicos",
  },
  {
    Icon: CourtIcon,
    description: "Cópias de Processos",
  },
  {
    Icon: CourtIcon,
    description: "Elaboração de Teses e Peças Processuais",
  },
  {
    Icon: CourtIcon,
    description: "Elaboração de Pareceres",
  },
];

export function MyWork() {
  return (
    <div className={s.myWorkWrapper}>
      <h1 className={s.title}>MEU TRABALHO</h1>
      <p className={s.text}>
        Grande parte das empresas não mais descolocam seus advogados/prepostos
        para a realização de uma série de diligências, as quais demandariam
        altos custos de deslocamento e desperdício de tempo, preferindo
        contratar um correspondente para auxilia-los nos serviços fora da sua
        comarca sede.
      </p>
      <p className={s.text}>
        É nesse momento que me coloco à disposição para prestar um serviço de
        confiança e com total agilidade, sem que haja excessivo custo.
      </p>
      <p className={cn(s.text, s.lastText)}>
        Atuo com diversas áreas do Direito, tendo como foco principal a
        realização de diligências judiciais e extrajudiciais, sendo algumas
        delas:
      </p>
      <WorkList list={WORK_LIST} />
    </div>
  );
}
