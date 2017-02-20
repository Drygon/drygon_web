import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import {
  About, Contact, Characters,Home, Designs,
  Drawings, Drygon, Photos,Quotations, RequestForm,Plaques, Services,
  Stories, Templates,Tony, Training,
  Page404
} from '../components'
import logo from '../images/logo_name.png'

const NavBar = () => (
  <Router>
    <div>
      <div className="NavBar">
        <Menu stackable fluid secondary>
          <Menu.Item><Link to="/"><img alt="logo" src={logo} /></Link></Menu.Item>
          {/* About us */}
          <Dropdown pointing item simple text="About Us">
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/about">Drygon</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/tony">Tony Yep</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/contact">Contact Us</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Discipline interface charts */}
          <Dropdown pointing item simple text="Drawings">
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/drawings">Drawings</Link></Dropdown.Item>
              <Dropdown.Item text="- DBM Phase" />
              <Dropdown.Item text="- EDS Phase" />
              <Dropdown.Divider />
              <Dropdown.Item><Link to="/requestform">Request Form</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Training program and materials*/}
          <Dropdown pointing item simple text="Training">
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/training">1-Day Training Seminar</Link></Dropdown.Item>
              <Dropdown.Item text="On-Line Training (In Development)" />
              <Dropdown.Divider />
              <Dropdown.Header>Training Materials</Dropdown.Header>
              <Dropdown.Item text="- Power Point Slides" />
              <Dropdown.Item text="- Front End Loading (FEL) According to IPA" />
              <Dropdown.Item text="- Value Improving Practices" />
              <Dropdown.Item text="- Summary Description of DBM Phase" />
              <Dropdown.Item text="- Summary Description of EDS Phase" />
              <Dropdown.Item text="- FAST Diagram on Minimization of Rework" />
              <Dropdown.Divider />
              <Dropdown.Header>Hand-Outs</Dropdown.Header>
              <Dropdown.Item text="- Philosophical" />
              <Dropdown.Item text="- Whimsical" />
              <Dropdown.Divider />
              <Dropdown.Item text="Safety" />
              <Dropdown.Item text="Quality" />
            </Dropdown.Menu>
          </Dropdown>
          {/*Services*/}
          <Dropdown pointing item simple text="Services">
            <Dropdown.Menu>
              <Dropdown.Header>Training Program Facilitation</Dropdown.Header>
              <Dropdown.Item><Link to="/services">Program Description</Link></Dropdown.Item>
              <Dropdown.Item text="- Cost for Services" />
              <Dropdown.Divider />
              <Dropdown.Item text="Engineering Auditing & Mentoring" />
              <Dropdown.Item text="Project Management Support" />
            </Dropdown.Menu>
          </Dropdown>
          {/*WOW - World of Wonders*/}
          <Dropdown pointing item simple text="Wonders">
            <Dropdown.Menu>
              <Dropdown.Header>Photos</Dropdown.Header>
              <Dropdown.Item><Link to="/photos">Personal</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/photos">Internet</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/quotations">Quotation</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/*Stories of Interest*/}
          <Dropdown pointing item simple text="Stories">
            <Dropdown.Menu>
              <Dropdown.Header>Business</Dropdown.Header>
              <Dropdown.Item text="- Quality Management Works!"></Dropdown.Item>
              <Dropdown.Item text="- A Teambuilding Exercise" ></Dropdown.Item>
              <Dropdown.Item text="- VASA & Project Management" ></Dropdown.Item>
              <Dropdown.Item text="- Standing Behind Your Work" ></Dropdown.Item>
              <Dropdown.Header>My Book</Dropdown.Header>
              <Dropdown.Item text="- What's In A Name?" ></Dropdown.Item>
              <Dropdown.Item text="- In Search of Alexandrite" ></Dropdown.Item>
              <Dropdown.Header>Newsletters</Dropdown.Header>
            </Dropdown.Menu>
          </Dropdown>

          {/*Drygon Design*/}
          <Dropdown pointing item simple text='Designs'>
            <Dropdown.Menu>
              <Dropdown.Item text="Plaques" ></Dropdown.Item>
              <Dropdown.Item text="Designs" ></Dropdown.Item>
              <Dropdown.Item text="Templates" ></Dropdown.Item>
              <Dropdown.Item text="Chinese Characters" ></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
      <div className="NavBody">
        <Switch>
          <Route exact path="/" component={Home} />
          {/*About Us Drop Down*/}
          <Route path="/about" component={About} />
          <Route path="/tony" component={Tony} />
          <Route Path="/contact" component={Contact} />
          {/*Charts Drop down*/}
          <Route path="/drawings" component={Drawings} />
          <Route path="/requestform" component={RequestForm} />
          {/*Training Drop down*/}
          <Route path="/training" component={Training} />
          {/*Service drop down*/}
          <Route path="/services" component={Services} />
          {/*Wow drop down*/}
          <Route path="/photos" component={Photos} />
          <Route path="/quotations" component={Quotations} />
          {/*story drop down*/}
          <Route path="/stories" component={Stories} />
          {/*Drygon Design Drop Down*/}
          <Route path="/designs" component={Designs} />
          <Route path="/plaques" component={Plaques} />
          <Route path="/templates" component={Templates} />
          <Route path="/characters" component={Characters} />
          {/*Page not found*/}
          <Route component={Page404} />
        </Switch>
      </div>
    </div>
  </Router>
)
export default NavBar
