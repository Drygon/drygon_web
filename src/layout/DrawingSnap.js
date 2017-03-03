import React from 'react';
import { Embed, Segment } from 'semantic-ui-react'
import placeholder from '../images/DCI-100-A-placeholder.png'

const fileID = "JwZt34LTOvs"
const DrawingSnap = () => (
  <Segment>
  <h1>Discipline Interface Charts</h1>
    <Embed
    id={fileID}
    icon="right circle arrow"
    placeholder={placeholder}
    source="youtube" />
  </Segment>


)

export default DrawingSnap;

