import TituloSubtitulo from "../commom/DirecaoCommom";
import titulosDescrisoesSecoes from "../../../js/titulosDescrisoesSecoes"
import direcao from "/direcao.jpg";
export default function Direcao() {
  

    return (
        <section className="sectionDirecao" id="direcao">
            <div className="containerDirecao">
                <div className="tituloDirecao">

                    <h1>{titulosDescrisoesSecoes.direcao.titulo}</h1>
                    <hr className="linhaTitulo" />
                    <p>{titulosDescrisoesSecoes.direcao.descricao}</p>

                </div>
                <div className="direcao">
                    <div className="imagemDirecao">
                    <img src={direcao} alt="" />
                    </div>
                    <div className="infoDirecao">
                    <p>Olá! Meu nome é Ana Cláudia e tenho a honra de atuar como diretora e responsável pela nossa instituição. Sou graduada em Pedagogia e possuo pós-graduação em educação especial e atendimento especializado.</p><br></br>
<p>Exerço minha função com dedicação e carinho, tendo como objetivo principal cuidar e transformar a vida de cada criança que passa por aqui. </p> <br></br> <p>Sinto uma profunda gratidão a Deus pela oportunidade de fazer a diferença na vida delas, contando também com o apoio fundamental dos meus pais, Luis Carlos e Elena Yara. Juntos, temos a nobre missão de proporcionar conhecimento a cada criança que nos é confiada.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}