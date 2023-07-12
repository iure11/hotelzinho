export default function DepoimentosCommom({titulo,descricao,mamae,coracoes,imagem,filhas,depoimento}) {
    return (
        <div>
           <h1>{titulo}</h1>
           <p>{descricao}</p>
           <p>{mamae}</p>
           <p>{coracoes}</p>
           <img>{imagem}</img>
              <p>{filhas}</p>
                <p>{depoimento}</p>

        </div>
    )
}