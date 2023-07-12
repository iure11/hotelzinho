export default function TituloTurminhas({ imagem, titulo, descricao }) {
    return (
        <div>
            <h1>{titulo}</h1>
            <h2>{descricao}</h2>
            <p>{imagem}</p>
        </div>
    );
}
