import Chamada from "./sectionChamada/Chamada";
import Depoimentos from "./sectionDepoimentos/Depoimentos";
import Direcao from "./sectionDirecao/Direcao";
import Formulario from "./sectionFormulario/Formulario";
import NosTemos from "./sectionNosTemos/NosTemos";
import QuemSomos from "./sectionQuemSomos/QuemSomos";
import Turminhas from "./sectionTurminhas/Turminhas";

export default function Main() {
    return (
       <main>
           <Chamada />
            <Depoimentos />
            <Direcao />
            <Formulario />
            <NosTemos />
            <QuemSomos />
            <Turminhas />
       </main>
    )
}