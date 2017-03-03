import React, { Component } from 'react'
import { storage } from '../database/database'

const storageRef = storage.ref()
const drawingFile = storageRef.child('Drawings/DCI-100-A.pdf')

class DrawingsPage extends Component {
constructor() {
    super()
    this.state=({
      url: ""
    })
  }

componentWillMount() {
  drawingFile.getDownloadURL().then((url) => {
    if (url !== '') {
      console.log(url)
      this.setState({
        url: url
      })
    }
  }
  ).catch((error)=> (
    console.log(error)
  ))
}

  render() {
      return (
      <div id="drawing">
      <iframe src={this.state.url} ></iframe>
      </div>
    )
  }
}

export default DrawingsPage
