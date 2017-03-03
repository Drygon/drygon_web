import React from 'react'
import { Label, Segment } from 'semantic-ui-react'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'
import { cloudinaryConfig } from '../database/database'

const publicID = "Winter-snow-red-feather-bird_2560x1440_byzkiu"
const cloudName = cloudinaryConfig.cloud_name

const PhotoSnap = () => (
  <Segment textAlign="center">
    <Label attached="top">Photo A Day</Label>
    <CloudinaryContext cloudName={cloudName}>
      <Image publicId={publicID}>
        <Transformation width="300" crop="scale" />
      </Image>
    </CloudinaryContext>
  </Segment>
)

export default PhotoSnap
