import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import title from '../images/title.png'
import logo from '../images/logo_origin.png'
import styles from './Styles'

const Home = () => (

  <div id="container">
    <h1>This is Home</h1>
    <Grid container verticalAlign="middle" columns={2} centered>
        <Grid.Row >
          <Grid.Column>
            <Image src={logo} Small/>
          </Grid.Column>
          <Grid.Column>
            <Image src={title} Huge/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
)

export default Home
