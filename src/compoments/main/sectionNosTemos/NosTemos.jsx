import titulosDescrisoesSecoes from "../../../js/titulosDescrisoesSecoes";

export default function NosTemos() {
  const nosTemos = [
    {
      oferta: titulosDescrisoesSecoes.oferta.primeiraOferta.oferta,
      imagem: titulosDescrisoesSecoes.oferta.primeiraOferta.imagem,
      descricao: titulosDescrisoesSecoes.oferta.primeiraOferta.descricao,
    },
    {
      oferta: titulosDescrisoesSecoes.oferta.segundaOferta.oferta,
      imagem: titulosDescrisoesSecoes.oferta.segundaOferta.imagem,
      descricao: titulosDescrisoesSecoes.oferta.segundaOferta.descricao,
    },
    {
      oferta: titulosDescrisoesSecoes.oferta.terceiraOferta.oferta,
      imagem: titulosDescrisoesSecoes.oferta.terceiraOferta.imagem,
      descricao: titulosDescrisoesSecoes.oferta.terceiraOferta.descricao,
    },
  ];

  return (
    <section className="sectionNosTemos">
      <div className="tituloNosTemos">
        <h1>{titulosDescrisoesSecoes.nosTemos.titulo}</h1>
        <hr className="linhaTitulo" />
        <p>{titulosDescrisoesSecoes.nosTemos.descricao}</p>
      </div>

      <div className="nosTemosContainer">
        {nosTemos.map((item, index) => (
          <div key={index} className={`itemNosTemos ${index === 0 ? 'primeiroItem' : ''}`}>
          
              <h2>{item.oferta}</h2>
              <img src={item.imagem} alt="Imagem do item" />
              <p>{item.descricao}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}