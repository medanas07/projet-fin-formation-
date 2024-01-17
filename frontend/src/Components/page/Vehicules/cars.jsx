import React from 'react';
import './cars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Cars = () => {
  return (
    <div>
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
    <section className="testimonials">
    <h1><b><p >Les Marques Des Voitures</p></b></h1>
    <br />
    </section>
    <div className="brands-list-widget">
  <div className="container">
    <div className="bloc-title">
      
    </div>
    <div className="brands-list">
    <a href="https://www.bmw.fr/fr/accueil.html" data-caption-title="BMW" data-attachment-id="1135" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Bmw Logo Mini"
      title="BMW"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/bmw-logo-mini/2243634691.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/bmw-logo-mini/2243634691.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.chevrolet.com" data-caption-title="Chevrolet" data-attachment-id="1138" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Chevrolet Logo Mini"
      title="Chevrolet"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/chevrolet-logo-mini/2298908050.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/chevrolet-logo-mini/2298908050.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.ford.fr" data-caption-title="Ford" data-attachment-id="1145" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Ford Logo Mini"
      title="Ford"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/ford-logo-mini/658667430.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/ford-logo-mini/658667430.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.jeep.ca/en" data-caption-title="Jeep" data-attachment-id="1154" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Jeep Logo Mini"
      title="Jeep"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/jeep-logo-mini/4171346864.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/jeep-logo-mini/4171346864.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>


<a href="https://www.landrover.fr/index.html" data-caption-title="Land Rover" data-attachment-id="1159" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Land Rover Logo Mini"
      title="Land Rover"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/land-rover-logo-mini/2353538854.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/land-rover-logo-mini/2353538854.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.mercedes-benz.fr/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE" data-caption-title="Mercedes" data-attachment-id="1166" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Mercedes Benz Logo Mini"
      title="Mercedes"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/mercedes-benz-logo-mini/875061318.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/mercedes-benz-logo-mini/875061318.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.porsche.com/france/" data-caption-title="Porsche" data-attachment-id="1175" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Porsche Logo Mini"
      title="Porsche"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/porsche-logo-mini/1106633301.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/porsche-logo-mini/1106633301.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.jaguar.fr/index.html" data-caption-title="Jaguar" data-attachment-id="1153" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Jaguar Logo Mini"
      title="Jaguar"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/jaguar-logo-mini/1644509941.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/jaguar-logo-mini/1644509941.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.astonmartin.com/fr/" data-caption-title="Aston Martin" data-attachment-id="641" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Aston Martin Logo Mini"
      title="Aston Martin"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/aston-martin-logo-mini/2228994628.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/aston-martin-logo-mini/2228994628.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.bentleymotors.com/en.html" data-caption-title="Bentley" data-attachment-id="1134" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Bentley Logo Mini"
      title="Bentley"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/bentley-logo-mini/462752388.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/bentley-logo-mini/462752388.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.bugatti.com" data-caption-title="Bugatti" data-attachment-id="644" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Bugatti Logo Mini"
      title="Bugatti"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/bugatti-logo-mini/2515458653.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/bugatti-logo-mini/2515458653.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.ferrari.com/fr-TN/" data-caption-title="Ferrari" data-attachment-id="1192" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Ferrari Logo Mini"
      title="Ferrari"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/ferrari-logo-mini/3814241673.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/ferrari-logo-mini/3814241673.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.hummer.fr" data-caption-title="Hummer" data-attachment-id="1149" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Hummer Logo Mini"
      title="Hummer"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/hummer-logo-mini/2062431661.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/hummer-logo-mini/2062431661.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.lamborghini.com/fr-en" data-caption-title="Lamborghini" data-attachment-id="1157" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Lamborghini Logo Mini"
      title="Lamborghini"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/lamborghini-logo-mini/3860987291.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/lamborghini-logo-mini/3860987291.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>
<a href="https://www.maserati.com/fr/fr" data-caption-title="Maserati" data-attachment-id="1162" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Maserati Logo Mini"
      title="Maserati"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/maserati-logo-mini/1318250193.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/maserati-logo-mini/1318250193.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.rolls-roycemotorcars.com/en_GB/home.html" data-caption-title="Rolls Royce" data-attachment-id="1176" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Rolls Royce Logo Mini"
      title="Rolls Royce"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/rolls-royce-logo-mini/2268423481.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/rolls-royce-logo-mini/2268423481.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.cadillac.com" data-caption-title="Cadillac" data-attachment-id="1137" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Cadillac Logo Mini"
      title="Cadillac"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/cadillac-logo-mini/1925176742.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/cadillac-logo-mini/1925176742.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>

<a href="https://www.dodge.com" data-caption-title="Dodge" data-attachment-id="1144" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Dodge Logo Mini"
      title="Dodge"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/dodge-logo-mini/1350654351.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/dodge-logo-mini/1350654351.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>



<a href="https://www.tesla.com/fr_fr" data-caption-title="Tesla" data-attachment-id="1185" className="fg-thumb">
  <span className="fg-image-wrap">
    <img
      decoding="async"
      alt="Tesla Logo Mini"
      title="Tesla"
      width="150"
      height="113"
      className="skip-lazy fg-image"
      data-src-fg="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/tesla-logo-mini/628350034.png"
      src="https://www.logo-voiture.com/wp-content/uploads/cache/2021/01/tesla-logo-mini/628350034.png"
      loading="eager"
    />
  </span>
  <span className="fg-image-overlay"></span>
</a>







    </div>
  </div>
</div>


  </div>
   
  );
};

export default Cars;
