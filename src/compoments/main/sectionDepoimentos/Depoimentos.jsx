import TituloSubtitulo from "../commom/DepoimentosCommom";
import titulosDescrisoesSecoes from "../../../js/titulosDescrisoesSecoes"
import '../../../css/styles.css';




export default function Depoimentos() {
    return (
      <section className="sectionDepoimentos">
       
        <div className="tituloDepoimento">
     
          <h1>{titulosDescrisoesSecoes.depoimentos.titulo}</h1>
          <hr/>
          <p>{titulosDescrisoesSecoes.depoimentos.descricao}</p>
        </div>
  
        <div className="depoimentos">
          <div className="mamaes">
            <div>
              <p>Mamãe: Maiara Reis</p>
              <p>♥♥♥♥♥</p>
            </div>
          </div>
  
          <div className="imagemDepoimento">
            <img src="https://uploaddeimagens.com.br/images/004/523/426/full/IMG-20230531-WA0078.jpg?1687912949" alt="" />
          </div>
  
          <div className="avaliacoes">
            <p>Filhas:</p>
            <p>Sophia e Luiza Helena</p>
            <p>
              “Super indico, muito atenciosas, cuidadosas, minhas filhas amam ir pra escolinha. Eu só tenho a agradecer.”
            </p>
          </div>
        </div>
      </section>
    );
  }
  