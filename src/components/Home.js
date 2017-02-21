import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import title from '../images/title.png'
import logo from '../images/logo_origin.png'

const Home = () => (

  <div id="banner-wrapper">
  <section id="banner">
    <Grid container verticalAlign="middle" columns={2} centered>
        <Grid.Row >
          <Grid.Column width={4}>
            <Image src={logo} size="small"/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Image src={title} size="massive"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </section>
    </div>
)

export default Home
