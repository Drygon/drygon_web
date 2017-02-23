import React from 'react'
import { Button, Icon, Segment, Label } from 'semantic-ui-react'

const quote = 'Give a man a truth and he will think for a day.  Teach a man to reason and he will think for a lifetime.'
const author = 'anonymous'
const QuotationPage = () => (
  <Segment>
    <div className="quote-box">
      <div className="quote-text">
          <Icon left quote />
        {quote}
      </div>
        <Icon right quote />
      <div className="quote-author">
          <Icon minus />
           {author}

      </div>
      <Button basic>View More</Button>
    </div>

    <Label attached="bottom">Food for Thought</Label>
  </Segment>
)

export default QuotationPage
