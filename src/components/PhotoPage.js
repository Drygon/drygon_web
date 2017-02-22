import React from 'react'
import { Image, Label, Segment } from 'semantic-ui-react'
import photo from '../images/photoaday.jpg'

const PhotoPage = () => (
  <Segment padded>
  <Image src={photo} size="medium" wrapped centered/>
  <Label attached="bottom">Photo A Day</Label>
  </Segment>
)

export default PhotoPage
