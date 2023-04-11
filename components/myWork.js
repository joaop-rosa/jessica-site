import cn from "classnames";
import s from "./myWork.module.css";
import { WorkList } from "./workList";
import CourtIcon from "/public/static/court-icon.svg";
import CertificateIcon from "/public/static/certificate-icon.svg";
import DeliveryIcon from "/public/static/delivery-icon.svg";
import RequirementsIcon from "/public/static/requirements-icon.svg";
import RegistryIcon from "/public/static/registry-icon.svg";
import BellIcon from "/public/static/bell-icon.svg";
import BalanceIcon from "/public/static/balance-icon.svg";
import ProtocolIcon from "/public/static/protocol-icon.svg";
import ClipboardIcon from "/public/static/clipboard-icon.svg";
import ElaborationIcon from "/public/static/elaboration-icon.svg";
import ElaborationIcon2 from "/public/static/elaboration-icon2.svg";

const WORK_LIST = [
  {
    Icon: CourtIcon,
    description: "Audiência como preposto",
  },
  {
    Icon: CertificateIcon,
    description: "Solicitações de certidões",
  },
  {
    Icon: DeliveryIcon,
    description: "Entrega e retirada de documentos",
  },
  {
    Icon: RequirementsIcon,
    description: "Requerimentos em geral",
  },
  {
    Icon: RegistryIcon,
    description: "Serviços Cartorários",
  },
  {
    Icon: BellIcon,
    description: "Entrega de Notificações",
  },
  {
    Icon: BalanceIcon,
    description: "Acompanhamento de Processos",
  },
  {
    Icon: ProtocolIcon,
    description: "Protocolos Físicos e Eletrônicos",
  },
  {
    Icon: ClipboardIcon,
    description: "Cópias de Processos",
  },
  {
    Icon: ElaborationIcon,
    description: "Elaboração de Teses e Peças Processuais",
  },
  {
    Icon: ElaborationIcon2,
    description: "Elaboração de Pareceres",
  },
];

export function MyWork({ currentRef }) {
  return (
    <div ref={currentRef} className={s.myWorkWrapper}>
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
