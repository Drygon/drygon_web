import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { PhotoPage, QuotationPage } from '../components'

const HomeBody = () => (
<div id="main" className="container">
      <section className="box features">
        <h2 className="major"><span>Something here!!!</span></h2>
        <div>
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment>
                <PhotoPage />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <QuotationPage />
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </section>
</div>
)

export default HomeBody
