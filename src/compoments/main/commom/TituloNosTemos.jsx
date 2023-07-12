export default function TituloNosTemos({ imagem, titulo, descricao, oferta }) {
    return (
        <div>
            <h1>{titulo}</h1>
            <h2>{descricao}</h2>
            <p>{imagem}</p>
            <h2>{oferta}</h2>
        </div>
    );
}