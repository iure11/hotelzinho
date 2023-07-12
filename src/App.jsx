import { Fragment, useEffect, useState } from "react"
import Header from "./compoments/header/Header"
import Main from "./compoments/main/Main"
import Footer from "./compoments/footer/Fotter"
import Tools from "./compoments/Tools/Tools"
import Depoimentos from "./compoments/main/sectionDepoimentos/Depoimentos"
import './css/styles.css'
import Direcao from "./compoments/main/sectionDirecao/Direcao"
import Depoimento from "./compoments/main/sectionDepoimentos/Depoimento"
import Chamada from "./compoments/main/sectionChamada/Chamada"
import QuemSomos from "./compoments/main/sectionQuemSomos/QuemSomos"
import Turminhas from "./compoments/main/sectionTurminhas/Turminhas"
import NosTemos from "./compoments/main/sectionNosTemos/NosTemos"
import Form from "./Form"
import Whatsapp from "./compoments/Tools/Whatsapp"


export default function App() {



return (
<div>
<Chamada/>
<QuemSomos/>
<Turminhas/>
<NosTemos/>
<Depoimento/> 
<Direcao/>  
<Form/>
<Footer/>
<Whatsapp/>

</div>
 
);


}
