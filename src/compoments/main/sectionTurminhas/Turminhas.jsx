import titulosDescrisoesSecoes from "../../../js/titulosDescrisoesSecoes";

export default function Turminhas() {
  const turmas = [
    {
      titulo: titulosDescrisoesSecoes.turmas.primeiraTurma.titulo,
      descricao: titulosDescrisoesSecoes.turmas.primeiraTurma.descricao,
      imagem: titulosDescrisoesSecoes.turmas.primeiraTurma.imagem,
    },
    {
      titulo: titulosDescrisoesSecoes.turmas.segundaTurma.titulo,
      descricao: titulosDescrisoesSecoes.turmas.segundaTurma.descricao,
      imagem: titulosDescrisoesSecoes.turmas.segundaTurma.imagem,
    },
    {
      titulo: titulosDescrisoesSecoes.turmas.terceiraTurma.titulo,
      descricao: titulosDescrisoesSecoes.turmas.terceiraTurma.descricao,
      imagem: titulosDescrisoesSecoes.turmas.terceiraTurma.imagem,
    },
  ];

  return (
    <section className="sectionTurminhas" id="turmas">
    <div className="tituloTurminhas">
  <h1>{titulosDescrisoesSecoes.turminhas.titulo}</h1>
  <hr className="linhaTitulo" />
  <p>{titulosDescrisoesSecoes.turminhas.descricao}</p>
</div>

      <div className="turminhasContainer">
      {turmas.map((turma, index) => (
  <div key={index} className={`turminhas2 ${index === 0 ? 'primeiraTurma' : ''}`}>
    <div className="imagemTurma">
      <img src={turma.imagem} alt="Imagem da turma" />
    </div>
    <div className="descricaoTurma">
      <h2>{turma.titulo}</h2>
      <p>{turma.descricao}</p>
    </div>
  </div>
        ))}
      </div>
    </section>
  );
}