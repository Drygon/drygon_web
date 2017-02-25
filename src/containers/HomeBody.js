import React from 'react'
import { Grid } from 'semantic-ui-react'
import PhotoPage from './PhotoPage'
import QuotationPage from './QuotationPage'

const HomeBody = () => (
  <div id="main" className="container">
    <section className="box features">
      <h2 className="major"><span>Something here!!!</span></h2>
      <div>
        <Grid stackable columns="equal" stretched>
          <Grid.Column>
            <PhotoPage />
          </Grid.Column>
          <Grid.Column>
            <QuotationPage />
          </Grid.Column>
        </Grid>
      </div>
    </section>
  </div>
)

export default HomeBody