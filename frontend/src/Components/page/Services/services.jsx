import React from 'react';
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
  return (
    <div>
      <div className="header_services">
      <header className="cars-header">
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
      </div>
      <div className='Services'>
        <h1>Nos Services</h1>
        <p>
          Chez LuxeCars, nous sommes fiers de vous offrir une gamme de services de qualité pour répondre à vos besoins automobiles.
        </p>
        <h2>Nos Principaux Services</h2>
        <ul>
          <li>Service d'entretien régulier</li>
          <li>Réparations mécaniques</li>
          <li>Personnalisation de voiture de luxe</li>
          <li>Conseils d'achat personnalisés</li>
        </ul>
        <h2>Avantages de Choisir Nos Services</h2>
        <ul>
          <li>Équipe hautement qualifiée</li>
          <li>Utilisation de pièces d'origine</li>
          <li>Service rapide et fiable</li>
          <li>Personnalisation selon vos préférences</li>
        </ul>
        <p>
          Nous nous engageons à offrir une expérience exceptionnelle à chaque client. Contactez-nous aujourd'hui pour découvrir comment nous pouvons répondre à vos besoins automobiles.
        </p>
      </div>
    </div>
  );
};

export default Services;
