import Image from 'next/image'
import StyleNav from '../styles/Navbar.module.css'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Col  } from 'react-bootstrap'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export function NavLogo(){
  return(
    <Navbar bg="light" className="d-none d-sm-block" expand="lg">
        <Container>
          <Col md={3}>
            <Image src="/logo-pmac.svg" alt="Vercel Logo" className="mt-2" width={222} height={70} />
          </Col>
          <Col md={7} className="justify-content-start">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>
          </Col>
        </Container>
      </Navbar>
    
  )
  
}

export function NavMenu(){
  return(
    <Navbar bg="light" expand="lg">
      <Container >
          <Navbar.Brand href="#" className="d-lg-none">
            <Image src="/logo-pmac.svg" alt="Vercel Logo" className="mt-2" width={102} height={55} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown" >
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      
  </Navbar.Collapse>
  </Container>
</Navbar>
    
  )
  
}
