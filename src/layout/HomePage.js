import React from 'react';
import { Grid } from 'semantic-ui-react';
import { DrawingSnap, Footer, ImageHeader, PhotoSnap, QuotationSnap } from '../components';

const HomePage = () => (
  <div>
    <ImageHeader />
    <div id="main-wrapper">
      <div id="main" className="container">
        <Grid centered stackable columns={2}>
          <Grid.Column>
            <DrawingSnap />
          </Grid.Column>
          <Grid.Row verticalAlign="top" columns={2}>
            <Grid.Column>
              <PhotoSnap />
            </Grid.Column>
            <Grid.Column >
              <QuotationSnap />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
    <Footer />
  </div>
)

export default HomePage;
