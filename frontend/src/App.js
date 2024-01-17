import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignup from './Components/page/LoginSignup/LoginSignup';
import About from './Components/page/AbotPage/About';
import HomePage from './Components/page/Accueil/Homepage';
import Cars from './Components/page/Vehicules/cars';
import Services from './Components/page/Services/services';
import Nouveautes from './Components/page/Nouvautés/nouvautes';
import Promotions from './Components/page/Promotions/promo';
import Contacts from './Components/page/Contacts/contact';


export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
         <Route path="/" element={<LoginSignup />} />
         <Route path="/about" element={<About />} />
         <Route path="/Accueil" element={<HomePage />} />
         <Route path="/Vehicules" element={<Cars />} />
         <Route path="/Services" element={<Services />} />
         <Route path="/Nouveautés" element={<Nouveautes />} />
         <Route path="/Promotions" element={<Promotions />} />
         <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
};
