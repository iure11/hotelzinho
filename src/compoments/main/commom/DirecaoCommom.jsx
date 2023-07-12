export default function DirecaoCommom({ titulo, descricao, imagem,subdescricao }) {
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            <img>{imagem}</img>
            <p>{subdescricao}</p>
        </div>
    )
}