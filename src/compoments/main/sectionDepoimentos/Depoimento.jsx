import titulosDescrisoesSecoes from "../../../js/titulosDescrisoesSecoes"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import '../../../css/styles.css';

// import required modules
import { Navigation, Autoplay} from "swiper";

import maiara from "/maiaraa.jpg";
import taciane from "/tacianee.jpeg";
import karina from "/karina.jpeg";



export default function Depoimento() {

   
    return (
        <section className="sectionDepoimentos">

            <div className="tituloDepoimento">

                <h1>{titulosDescrisoesSecoes.depoimentos.titulo}</h1>
                <hr className="linhaTitulo" />
                <p>{titulosDescrisoesSecoes.depoimentos.descricao}</p>
            </div>

            <div className="containerSwiper">
                <>
                    <Swiper navigation={true} modules={[Navigation,Autoplay]} className="mySwiper"
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}

                    >
                        <SwiperSlide>  <div className="depoimentos">
                            <div className="mamaes">
                                <div>
                                    <p className="nomeMamae">Mamãe: Maiara Reis</p>
                                    <p className="coracoesDepoimento">♥♥♥♥♥</p>
                                </div>
                            </div>

                            <div className="imagemDepoimento">
                            <img src={maiara} alt="" />
                            </div>

                            <div className="avaliacoes">
                                <p className="nomeMamae">Filhas:</p>
                                <p className="nomeMamae">Sophia e Luiza Helena</p>
                                <p className="depoimentoP">
                                    “Super indico, muito atenciosas, cuidadosas, minhas filhas amam ir pra escolinha. Eu só tenho a agradecer.”
                                </p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>
                        <div className="depoimentos">
                            <div className="mamaes">
                                <div>
                                <p className="nomeMamae">Mamãe: Karyna Fergon</p>
                                <p className="coracoesDepoimento">♥♥♥♥♥</p>
                                </div>
                            </div>

                            <div className="imagemDepoimento" >
                            <img src={karina} alt="" />
                            </div>

                            <div className="avaliacoes">
                            <p className="nomeMamae">Filho:</p>
                            <p className="nomeMamae">Felipe</p>
                            <p className="depoimentoP">
                                “Encontrei um lugar incrível para deixar meu filho. Horários compatíveis com nosso trabalho, sem emendas em feriados prolongados. As cuidadoras tratam as crianças com respeito e carinho, mantendo-nos informados sobre a rotina. Estou muito satisfeito com o cuidado oferecido por essas profissionais humanas e sensíveis.”
                                </p>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="depoimentos">
                            <div className="mamaes">
                                <div>
                                <p className="nomeMamae">Mamãe: Taciane</p>
                                <p className="coracoesDepoimento">♥♥♥♥♥</p>
                                </div>
                            </div>

                            <div className="imagemDepoimento">
                            <img src={taciane} alt="" />
                            </div>

                            <div className="avaliacoes">
                            <p className="nomeMamae">Filha:</p>
                            <p className="nomeMamae">Ana Liz</p>
                            <p className="depoimentoP">
                                “Uma escolinha excelente com aconchego familiar... Minha filha é amada e muito bem cuidada.”
                                </p>
                            </div>
                        </div>
                        </SwiperSlide>

                    </Swiper>
                </>
            </div>
        </section>
    );
}