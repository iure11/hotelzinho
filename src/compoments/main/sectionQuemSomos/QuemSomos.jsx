import img1 from "/img1.jpg";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img4 from "/img4.jpg";
import img5 from "/img5.jpg";
import img6 from "/img6.jpg";




export default function QuemSomos() {
    return (
        <section className="sectionQuemSomos" id="quemsomos">
        <div>
            <div className="topRow">
                <div className="divQuemSomosLeft">
                    <h2 className="quemSomosT1">Quem Somos</h2>
                    <p className="quemSomosP">O nosso espaço teve início nas atividades em Julho do ano de 2020 durante o período de pandemia ocasionada pelo covid-19. Inicialmente, a procura de aulas de reforço eram ofertadas de maneira domiciliar. Com o passar do tempo devido o aumento da demanda optamos por abrir uma sede física. Com a procura de pais para essas crianças ficarem no local com o objetivo de receber apoio nas disciplinas escolares, iniciamos o atendimento de alunos tanto em meio período quanto em período integral, na modalidade de hotelzinho. </p>
                    <p className="quemSomosP">Hoje, a nossa equipe tem o maior prazer em zelar, cuidar e incentivar o desenvolvimento de cada aluno desde o berçário de 5 meses até alunos de reforço de até 10 anos, trabalhamos com flexibilidade de atendimento por hora até mensal a partir das 6:30 às 19:00 de segunda a sexta.</p>
                </div>

                <div className="divQuemSomosRight">
                    <div className="divImagens">
                      <div>
                        <div className="img1"><img className="imgQuemSomos" src={img1} alt="descrição da imagem" /></div>
                        <div className="img2e3">
                            <div className="img2"><img className="imgQuemSomos" src={img2} alt="descrição da imagem" /></div>
                            <div className="img3"><img className="imgQuemSomos" src={img3} alt="descrição da imagem" /></div>
                        </div>
                      </div>
                        <div className="img456">
                            <div className="img4"><img className="imgQuemSomos" src={img4} alt="descrição da imagem" /></div>
                            <div className="img5"><img className="imgQuemSomos" src={img5} alt="descrição da imagem" /></div>
                            <div className="img6"><img className="imgQuemSomos" src={img6} alt="descrição da imagem" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomRow">
                <div className="divQuemSomosBaixo1">
                    <h2 className="quemSomosT2">Missão</h2>
                    <p className="quemSomosP">Nossa missão é fornecer educação de qualidade em um ambiente acolhedor, com o objetivo de desenvolver o potencial ilimitado e os talentos naturais de cada aluno, promovendo amor e inclusão para todos.</p>
                </div>
                <div className="divQuemSomosBaixo2">
                    <h2 className="quemSomosT3">Valores</h2>
                    <p className="quemSomosP">Nossa valorização está na troca de conhecimento e no amadurecimento intelectual de forma amigável, visando promover o convívio social e tornar o desenvolvimento do conhecimento simples e prazeroso.</p>
                </div>
            </div>
        </div>
    </section>

    )
}