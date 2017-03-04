import React, { Component } from 'react'
import { Image, Label,Segment } from 'semantic-ui-react'
import { storage } from '../database/database'
import { getSelect } from '../util'

const selected = getSelect(341).toString()
const storageRef = storage.ref()
const filePath = "Images/" + selected + ".jpg"

class PhotoSnap extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      url: ""
    })
  }


  componentWillMount() {
    this.setState({
      loading: true
    })

  const imageFile = storageRef.child(filePath)
   imageFile.getDownloadURL().then((url) => {
    if (url !== '') {
      this.setState({
        url: url
      })
    }
  }
  ).catch((error)=> (
    console.log(error)
  ))
  }
  componentWillUnmount() {
    storage.ref("Images").off()
  }

render(){

  return (
  <Segment textAlign="center" clearing>
    <Label attached="top">Photo A Day</Label>

      <Image src={this.state.url}/>

  </Segment>
)}
}

export default PhotoSnap
