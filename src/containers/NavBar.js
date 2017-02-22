import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import { About, Contact, Home, Drawings, Drygon,
  Training, Services, Wonders, Stories, Designs,
  RouteWithSubRoutes } from '../components'
import logo from '../images/logo_name.png'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/drygon',
        component: Drygon
      },
      {
        path: '/about/contact',
        component: Contact
      }
    ]
  },
  {
    path: '/drawings',
    component: Drawings
  },
  {
    path: '/training',
    component: Training
  },
  {
    path: '/services',
    component: Services
  },
  {
    path: '/wonders',
    component: Wonders
  },
  {
    path: '/stories',
    component: Stories
  },
  {
    path: '/designs',
    component: Designs
  },
]

const NavBar = () => (
  <Router>
    <div>
      <Menu stackable fluid secondary>
        <Menu.Item><Link to="/"><Image id="logo" alt="logo" src={logo} size="tiny" /></Link></Menu.Item>
        <Dropdown pointing item simple text="About Us">
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/about">About Us</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/about/drygon">Drygon</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/about/contact">Contact</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown pointing item simple text="Drawings">
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/drawings">Drawings</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/drawings/requestForm">Request Form</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown pointing item simple text="Training">
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/training">Training</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/training/material">Training Material</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
         <Dropdown pointing item simple text="Services">
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/services">Services</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown pointing item simple text="Wonders">
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/wonders">Wonders</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown pointing item simple text="Stories">
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/stories">Stories</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown pointing item simple text="Designs">
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/designs">Designs</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  </Router>
)

export default NavBar
