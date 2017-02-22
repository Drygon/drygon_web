import React from 'react'
import { Segment, Label } from 'semantic-ui-react'

const quote = 'Give a man a truth and he will think for a day.  Teach a man to reason and he will think for a lifetime.'

const QuotationPage = () => (
  <Segment>
  <blockquote>
  {quote}
  </blockquote>
   <Label attached="bottom">Food for Thought</Label>
  </Segment>
)

export default QuotationPage
