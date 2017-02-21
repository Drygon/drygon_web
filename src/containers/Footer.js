import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const Footer = () => (
  <div>
    <footer id="footer">
      <div>

          <Button color="linkedin" size="small" >
            <Icon name="linkedin" />

          </Button>
            Get In Touch

      </div>
      <div id="copyright">
        <ul class="menu">
          <li>&copy; Drygon Consulting Inc. All rights reserved</li><li>Design & Program: <a href="https://hjzi.github.io/">Hui Jie Zi Consult Corp.</a></li>
        </ul>
      </div>

    </footer>
  </div>
)

export default Footer
