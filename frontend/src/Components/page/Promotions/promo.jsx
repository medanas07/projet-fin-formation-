import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Promotions = () => {
  return (
    <div>
         <header>
         <div >
          <a href="/Accueil" className='logo'>
          <p><span>Luxe</span>Cars</p>
          </a>
        </div>
        <nav className="navi"> 
          <a href="Accueil">Accueil</a>
          <a href="Vehicules">Vehicules</a>
          <a href="Services">Services</a>
          <a href="Nouveautés">Nouveautés</a>
          <a href="Promotions">Promotions</a>
          <a href="Contact">Contact</a>
        </nav>
        <div className="search-box">
      <button className="btn-search">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input type="text" className="input-search" placeholder="Type to Search..." />
    </div>
      </header>
      <h2>Les Promotions</h2>
      <p>Découvrez nos offres spéciales et promotions en cours :</p>
      <ul>
        <li>Promotion 1</li>
        <li>Promotion 2</li>
        <li>Promotion 3</li>
      </ul>
    </div>
  );
};

export default Promotions;
