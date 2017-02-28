import React, { Component } from 'react'
import { storage } from '../actions/database'
import { Image } from 'semantic-ui-react'

class DrawingsPage extends Component {
constructor() {
  super()
  this.state = {
    loading: false,
    file: []
  }
}

componentWillMount () {
  this.setState({
    loading: true
  })

  const fileName =() => {

  storage.ref().child('Drawings/DCI-100-A.pdf').getDownloadURL().then(
    (url) =>
    this.setState({
      file: [...url]
    })
  ).catch(
    (error) => {
      console.log(error)
    }
  )

}
  }

  render() {
    console.log(this.state.file[0])
    return (
      <div>

      <div> this is drawing page</div>
      |<Image src={this.state.file[0]} />
      </div>
    )
  }
}

export default DrawingsPage
