import React, { Component } from 'react'
import { Icon, Label, Grid, Segment } from 'semantic-ui-react'
import { database } from '../database/database'

const getSelect = (total) => {
  return Math.floor(Math.random() * total + 1)
}

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
        const totalQuote = snap.numChildren()
        const selected = getSelect(totalQuote)
        const quotation = snap.val()[selected]
        if (quotation != null) {
          this.setState({
            author: quotation.author,
            category: quotation.category,
            text: quotation.text,
            loading: false
          })
        }

      })

  }
  componentWillUnmount() {
    database.ref("quotations").off()
  }
  render() {
    const { author, category, text, loading } = this.state

    return (
      <Grid.Column >
          <Segment className="quotation" textAlign="center" loading={loading}>
          <Label attached="top">Food for Thought - {category} </Label>
            <Icon name="left quote" />{text}
            <br />
            <br />
              <Icon name="minus" /> {author}
          </Segment>
      </Grid.Column>
    )
  }
}



export default QuotationSnap
