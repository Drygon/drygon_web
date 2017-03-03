import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Home } from '../components'
import Footer from './Footer'
import PhotoSnap from './PhotoSnap'
import QuotationSnap from './QuotationSnap'
import DrawingSnap from './DrawingSnap'

const HomePage = () => (
  <div>
  <Home />
  <div id="main-wrapper">
  <div id="main" className="container">
    <section className="box features">
      <h2 className="major"><span>Discipline Interface Charts</span></h2>
      <div>
        <Grid stackable stretched>
        <Grid.Row stretched>
          <Grid.Column width={6}>
            <PhotoSnap />
            <QuotationSnap />
          </Grid.Column>
          <Grid.Column width={10}>
            <DrawingSnap />
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </div>
    </section>
  </div>
  </div>
  <Footer />
  </div>
)

export default HomePage
