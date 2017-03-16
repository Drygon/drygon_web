import React from 'react';
import { About, Footer } from '../components';

const AboutPage = () => (
  <div id="about-page">
    <div id="main-wrapper">
      <div id="main" className="container">
          <About />
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
