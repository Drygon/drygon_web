import React, { Component } from 'react'
import { Container, Header, Icon, Label, Segment } from 'semantic-ui-react'
import database from '../actions/database'

const getSelect = (total) => {
  return Math.floor(Math.random() * total + 1)
}

class QuotationPage extends Component {

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
      <Segment stacked loading={loading} >
        <Header size="small" textAlign="center">{category}</Header>
        <Container>
          <Container text>
            <Icon name="left quote" />
            {text}
            <Icon name="right quote" />
          </Container>
          <Container textAlign="right">
            <Icon name="minus" /> {author}
          </Container>
        </Container>

        <Label attached="bottom">Food for Thought </Label>
      </Segment>
    )
  }
}



export default QuotationPage
