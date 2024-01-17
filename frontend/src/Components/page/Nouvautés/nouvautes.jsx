import React from 'react';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import './nouvautes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function GroupExample() {
  return (
    <div>
      <Row>
        <Col>
        <Card className='m-5 text-center' bg='transparent' text='white' border="white" style={{ borderWidth: '5px', borderRadius:'25px' }}  >
        <Card.Title style={{ fontSize: '50px'}}>BMW i7</Card.Title>
            <Card.Img variant="top" src="https://media.autoexpress.co.uk/image/private/s--Xgpxhuht--/f_auto,t_content-image-full-desktop@1/v1694444067/autoexpress/2023/09/BMW%20i7-6.jpg" />
        <Card.Body>
          
          <Card.Text>
          The exterior design of the latest 7 Series is certainly cause for debate, but what cannot be denied is that it is a highly-impressive luxury car. Opting for the all-electric i7 improves the package even further, and it’s such a fantastic luxury experience that we’ve named it our Luxury Car of the Year for 2023.

It’s on the road where the i7 outshines its combustion-powered sibling. While the standard 7 Series’ air suspension and excellent soundproofing mean it’s already a very well-refined car, the i7’s electric powertrain enhances these qualities even further. Not only is it incredibly quiet to drive, but the power is delivered in a very smooth and linear fashion – exactly what you’d expect from a car in this class. 

Meanwhile, the cabin of the i7 is filled with technology, has acres of space and a real sense of occasion. Plus, quality feels worthy of the £100,000–plus price tag. As you might expect, the options list for the i7 is pretty huge and includes an upgraded Bowers & Wilkins surround sound system, reclining lounge-style seating and rear window blinds, among other luxuries. The flagship EV’s true party piece is a 31-inch 8K Theatre Screen that folds down from the roof behind the front seats, however, it will cost you more than £4k to add.

Of course, sitting around and waiting for an EV to charge is far from a luxurious experience, so BMW has addressed this by fitting the i7 with a huge 101.7kWh battery that allows for a range of up to 388 miles, depending on your chosen spec. All i7s are capable of sub-5 second 0-62mph times, but if you’re in a particular hurry there’s a performance-oriented M Sport version available with 537bhp on tap.
</Card.Text>
        </Card.Body>
       
      </Card>
        </Col>
      </Row>

      <Row>
        <Col>
        <Card className='m-5 text-center' bg='transparent' text='white' border="white" style={{ borderWidth: '5px', borderRadius:'25px' }}  >
        <Card.Title style={{ fontSize: '50px'}}>Range Rover Sport</Card.Title>
        <Card.Img variant="top" src="https://media.autoexpress.co.uk/image/private/s--VBAboGPJ--/f_auto,t_content-image-full-desktop@1/v1670507376/autoexpress/2022/12/RR%20Sport%20vs%20Audi%20Q7-2.jpg" />
        <Card.Body>
          <Card.Text>
          The standard Range Rover was a pioneer for the luxury SUV market, and is still a hugely-impressive car, but the Range Rover Sport adds in a key element that’s a bit less common in this segment: a fun factor.

Considering that this large SUV weighs 2.3-tonnes, the Range Rover Sport offers a genuinely engaging drive with admirable capability in both performance and handling. The steering is precise, the air suspension keeps the car’s weight in check when cornering, and the diesel, petrol and PHEV powertrain options will all launch the Sport from 0-62mph in 6.3 seconds or less. The new 627bhp version called the Range Rover Sport SV turns things up to 11, and will hit 62mph in just 3.8 seconds.

Perhaps the best quality of the latest Range Rover Sport, though, is that this performance and engagement doesn't come at the expense of luxury. The air suspension works with active noise-cancellation technology to keep things calm and refined when you want them to be. There’s plenty of room for up to five passengers, too, and the materials and technology have been massively improved over the previous model. The Sport blends these qualities so seamlessly that it has beaten its sibling to become our 2023 Large Premium SUV of the Year. 
          </Card.Text>
        </Card.Body>
        
      </Card>
        </Col>
      </Row>

      <Row>
        <Col>
        <Card className='m-5 text-center' bg='transparent' text='white' border="white" style={{ borderWidth: '4px', borderRadius:'25px'}}  >
        <Card.Title style={{ fontSize: '50px'}}>Bentley Flying Spur</Card.Title>
        <Card.Img variant="top" src="https://media.autoexpress.co.uk/image/private/s--BcVY9_Dl--/f_auto,t_content-image-full-desktop@1/v1676376989/autoexpress/2023/02/Bentley%20Flying%20Spur%20Hybrid.jpg" />
        <Card.Body>
          <Card.Text>
          Luxury and performance are synonymous with Bentley motor cars, and the Flying Spur is the brand's ‘small’ four-door limousine. It uses an extended version of the Continental GT coupe’s platform, and comes with the choice of a V6 plug-in hybrid, a 4.0-litre V8, or a 6.0-litre W12 engine. No matter which engine you choose, this two-tonne-plus saloon delivers a sub-five second 0-62mph time. Naturally, the W12 offers the highest top speed at 207mph.
          
          The Flying Spur offers majestic levels of refinement and it's so well insulated and refined that even the roar of the twin-turbo 6.0-litre W12 engine is merely an underlying soundtrack.

As with all Bentleys, the Flying Spur is beautifully finished inside with the finest wood and leather trim, so occupants can be carried in supreme comfort at high speeds. Bentley’s Mulliner customisation programme also means you can have your Flying Spur specified to your every whim.
          </Card.Text>
        </Card.Body>
      </Card>
    
        </Col>
      </Row>
    </div>
  );
}

function Nouveautes() {
  return (
    <div>
      <div className="header_nouveautes">
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
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className='Nouveautes'>
        <h1>Découvrez Nos Dernières Nouveautés</h1>
        <p>
          Restez à la pointe de l'innovation automobile avec les dernières nouveautés de LuxeCars.
        </p>
        <div className="new-releases">
          {/* Use the GroupExample component here */}
          <GroupExample />
        </div>
        <p>
          Explorez nos dernières créations et trouvez la voiture de luxe qui correspond à votre style de vie.
        </p>
      </div>
    </div>
  );
}

export default Nouveautes;
