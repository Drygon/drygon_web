import React from 'react';
import { Card, Container, Header, Image } from 'semantic-ui-react';
import drygon from '../images/drygon_card.svg';
import logo from '../images/logo_name.png';

const DrygonCard = () => (
  <Card color="olive" raised centered>
    <Image src={drygon} size="large" />
  </Card>
)
const About = () => (
  <article class="box page-content">
    <Container text>
      <Header as="h1" textAlign="center" >DRYGON CONSULTING INC.</Header>
      <p>Is a company providing project and engineering management services.  The website <a href="http://drygon.com">Drygon</a> is the home of the <em>Discipline Interface Charts</em> which were developed and designed by <strong>Tony Yep</strong>.  These drawings provide the detailed sequence of work which should be maintained to ensure the successful execution of projects.  This website permits users to access these drawings for their personal use, plus related documentation to help improve their engineering and project management skills.</p>
      <p>The president of <em>Drygon Consulting Inc.</em> is <strong>Tony Yep</strong> who had been a professional engineer working at Bantrel Inc. in Calgary for over 20 years.  He held positions of Mechanical Department Chief, Project Engineer, Manager of Engineering and Senior Project Manager working on multiple projects related to the oilsands, petrochemical and refinery industry.</p>
      <Header as="h2">What Is DRYGON ??</Header>
      <p>This limerick was written by Tim Yep when he was 7 years old.  He created the Drygon creature.</p>
      <div id="drygon-card">
        <DrygonCard id="drygon-card" />
      </div>
      <p>Now DRYGON has matured into the current logo depicting a stylized design incorporating both a powerful dragon with the mythical phoenix.  <Image id="drygon" src={logo} size="mini" spaced /></p>
    </Container>
  </article>

);

export default About;
