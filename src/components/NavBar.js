import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';
import { AboutPage, DrawingsPage, HomePage } from '../layout';
import logo from '../images/logo_name.png';

const Links = () => (
  <nav id="nav">
 <Menu secondary>
      <Menu.Item><NavLink exact activeClassName="active" to="/">                    <Image id="logo" src={logo} alt="Drygon Logo" size="tiny" /></NavLink></Menu.Item>
      <Menu.Item><NavLink activeClassName="active" to="/about">About Us</NavLink></Menu.Item>
      <Menu.Item><NavLink activeClassName="active" to="/drawings">Drawings</NavLink></Menu.Item>
      <Menu.Item><NavLink activeClassName="active" to="/training">Training</NavLink></Menu.Item>
     <Menu.Item><NavLink activeClassName="active" to="/services">Services</NavLink></Menu.Item>
     <Menu.Item><NavLink activeClassName="active" to="/stories">Stories</NavLink></Menu.Item>
     <Menu.Item><NavLink activeClassName="active" to="/designs">Designs</NavLink></Menu.Item>
</Menu>
  </nav>
);

const NavBar = () => (
  <div>
    <Links />
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/drawings" component={DrawingsPage} />
  </div>
);

export default NavBar;
