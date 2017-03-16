import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import logo from '../images/logo_origin.png';
import title from '../images/title.png';

const ImageHeader = () => (
  <div id="banner-wrapper">
        <Grid id="banner">
          <Grid.Column floated="right" width={3}>
            <Image src={logo} alt={logo} size="small" />
          </Grid.Column>
          <Grid.Column floated="left" width={7}>
            <Image src={title} alt={title} size="huge" />
          </Grid.Column>
        </Grid>
        </div>
)

export default ImageHeader;
