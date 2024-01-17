import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

const Contacts = () => {
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
      <h1>Nous Contacter</h1>
      <h3><b><p>N'hésitez pas à nous contacter pour toute question ou préoccupation !! :</p></b></h3>
      <ul>
        Email : contact@votreentreprise.com
        <br />
        Téléphone : +216 98 196 143
        <br />
        Adresse : 137 H1, Ezzahra, Tunisia
      </ul>
    </div>
  );
};

export default Contacts;
