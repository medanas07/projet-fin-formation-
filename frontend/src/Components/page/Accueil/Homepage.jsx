import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css';

function GridExample() {
  return (
    <CardGroup className="mb-5" >
      <Card className='m-5 text-center' bg='transparent' text='white' border="white" style={{ borderWidth: '4px', borderRadius:'25px' }}  >
      <Card.Title >Super Cars</Card.Title>
        <Card.Img variant="top" src="https://media.autoexpress.co.uk/image/private/s--8gD9x4ZS--/f_auto,t_content-image-full-desktop@1/v1646318128/autoexpress/2022/03/Ferrari%20296%20GTB%202022%20-15.jpg" />
        <Card.Body>
          <Card.Text >
          Ferrari 296 GTB 
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <br />
      <br />
      <Card className='m-5 text-center' bg='transparent' text='white' border="white" style={{ borderWidth: '4px', borderRadius:'25px' }}  >
      <Card.Title>Muscle Cars</Card.Title>
      <Card.Img variant="bottom" src="https://media.autoexpress.co.uk/image/private/s--VWWfMogc--/f_auto,t_content-image-full-desktop@1/v1562241775/autoexpress/2/79/2015-sema-chevrolet-camaro-ss-black-accent-026-1_0.jpg" />
        <Card.Body>
          <Card.Text>
          Chevrolet Camaro
          </Card.Text>
        </Card.Body>
       
      </Card>
      <br />
      <Card className='m-5 text-center' bg='transparent' text='white' border="white" style={{ borderWidth: '4px', borderRadius:'25px' }}  >
      <Card.Title >SUV Cars</Card.Title>
      <Card.Img variant="bottom" src="https://cdn.motor1.com/images/mgl/Kj0qM/s1/bmw-ix.webp" />
        <Card.Body>
          <Card.Text>
          BMW iX
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
  );
}
const HomePage = () => {
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

      
      {/* Témoignages clients */}
      <section className="testimonials">
        <br /><br /><br />
        <br />
        <br />
        <br />
        <br />
        <h1><b><p >The Categories</p></b></h1>
       

      </section>
      <GridExample />
    </div>
  );
};

export default HomePage;
