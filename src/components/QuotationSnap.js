import React, { Component } from 'react'
import { Icon, Label , Segment} from 'semantic-ui-react'
import { database } from '../database/database'
import { getSelect } from '../util'

class QuotationSnap extends Component {

  constructor() {
    super()
    this.state = {
      author: '',
      category: '',
      text: '',
      loading: false
    }
  }

  componentWillMount() {
    this.setState({
      loading: true
    })
    database.ref("quotations")
      .once("value", snap => {
        const totalQuote = snap.numChildren();
        const selected = getSelect(totalQuote);
        const quotation = snap.val()[selected];

        if (quotation != null) {
          this.setState({
            author: quotation.author,
            category: quotation.category,
            text: quotation.text,
            loading: false
          })
        } else {
          this.setState({
            author: "",
            category: "",
            text: "",
            loading: false
          })
        }
  });
  }

  componentWillUnmount() {
    database.ref().off();
  }

  render() {
    const { author, category, text } = this.state

    return (
          <Segment padded="very" size="huge">
          <Label attached="top">Food for Thought - {category} </Label>
            <Icon name="left quote" />{text}
            <br />
            <br />
              <Icon name="minus" /> {author}
          </Segment>

    )
  }
}



export default QuotationSnap;
