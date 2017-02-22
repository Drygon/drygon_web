import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const Footer = () => (
  <footer id="footer" className="container">
    <div className="row 200%">
      <div className="12u">
        <section>
          <h2 className="major"><span>Get in touch</span></h2>
          <Button icon color="linkedin" >
            <Icon name="linkedin" /> LinkedIn
          </Button>
        </section>
        <div id="copyright">
          <ul className="menu">
            <li>&copy; Drygon Consulting Inc. All rights reserved</li>
            <li>Design & Program By: <a href="https://hjzi.github.io/">Hui Jie Zi Consult Corp.</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
