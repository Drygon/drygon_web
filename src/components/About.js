import React from 'react'
import RouteWithSubRoutes from './RouteWithSubRoutes'

const About = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}

  </div>

)

About.propTypes = {
  routes: React.PropTypes.string.isRequired
}
export default About
