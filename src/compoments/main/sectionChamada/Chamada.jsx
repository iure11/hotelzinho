import { useState } from 'react';
import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescrisoesSecoes from "../../../js/titulosDescrisoesSecoes"
// import Logo from "../../../img/Logo.png";

export default function Chamada(props) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <section className="sectionHeader">
      <button className="hamburger" onClick={toggleMenu}>
        <span>☰</span>
      </button>
      <nav>
        <ul className={showMenu ? 'show' : ''}>
          <li><a href="#quemsomos" class="active" className="menu-item-1">Quem Somos</a></li>
          <li><a href="#turmas" className="menu-item-2">Turmas</a></li>
          <li><img className="Logo" src="./Logo.png" alt="descrição da imagem" /></li>
          <li><a href="#direcao" className="menu-item-3">Direção</a></li>
          <li><a href="#contatos" className="menu-item-4">Contatos</a></li>
        </ul>
      </nav>
      <div className='tituloHeaderLogo'>
        <img src="./Logo.png" alt="" />
      </div>
      <div className="tituloHeader1">
        <h2>Hotelzinho e Reforço Escolar - Crescer e Aprender</h2>
      </div>
      <div className="tituloHeader2">
        <h2>Acrescentando conhecimento a sua vida</h2>
      </div>
    </section>
  );
}
