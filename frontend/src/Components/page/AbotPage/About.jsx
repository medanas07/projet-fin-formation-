import React from 'react';
import './styleAbout.css';

const About = () => {
  return (
    <div>
      <div className="header_lc">
        <header>
          <div>
            <a href="/Accueil" className='logo'>
              <p><span>Luxe</span>Cars</p>
            </a>
          </div>
        </header>
      </div>
      <div className='About'>
        <h1>Bienvenue chez LuxeCars</h1>
        <p>
          - LuxeCars propose une sélection exquise de voitures de luxe pour les passionnés de conduite.
        </p>
        <p>
          - Caractéristiques de LuxeCars :
        </p>
        <ul>
          <li>- Des voitures de luxe haut de gamme</li>
          <li>- Personnalisation avancée</li>
          <li>- Service client exceptionnel</li>
          <li>- Livraison sécurisée</li>
          <li>- Expérience d'achat exclusive</li>
        </ul>
        <p>
          - Découvrez le luxe ultime avec LuxeCars et trouvez la voiture de vos rêves dès aujourd'hui!
        </p>
      </div>
    </div>
  );
};

export default About;
