import React from 'react';
import { Segment, Label  } from 'semantic-ui-react'
import { Video, CloudinaryContext } from 'cloudinary-react'
import { cloudinaryConfig } from '../database/database'

const placeHolder = "Drawings/DCI-100-A"
const publicID = "Drawings/DCI-100-AB"
const cloudName = cloudinaryConfig.cloud_name

const DrawingSnap = () => (
  <Segment compact>
    <Label attached="top">Discipline Interface Charts</Label>
    <CloudinaryContext cloudName={cloudName}>
      <Video publicId={publicID} poster={{ publicId: placeHolder }}
        width="700" height="500" crop="scale" controls autoPlay loop />
    </CloudinaryContext>
  </Segment>
);

export default DrawingSnap;

