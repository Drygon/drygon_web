import React from 'react';
import { Label , Segment} from 'semantic-ui-react'
import { Video, CloudinaryContext } from 'cloudinary-react'
import { cloudinaryConfig } from '../database/database'

const placeHolder = "Drawings/DCI-100-A"
const publicID = "Drawings/DCI-100-AB"
const cloudName = cloudinaryConfig.cloud_name

const DrawingSnap = () => (
  <Segment>
  <Label attached="top right">Discipline Interface Charts</Label>
    <CloudinaryContext cloudName={cloudName}>
      <Video publicId={publicID} poster={{publicId:placeHolder}}
      width="700" height="500" crop="scale" controls/>
    </CloudinaryContext>
  </Segment>


)

export default DrawingSnap;

