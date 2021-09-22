import Image from 'next/image'
import StyleNav from '../styles/Navbar.module.css'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button, Row, Col  } from 'react-bootstrap'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function NavTop(){
    return(
      <Navbar  className={StyleNav.navTop}>
        <Container>
            <Col xs md={{ span: 4, offset: 8 }} className="text-end">
            <FontAwesomeIcon icon={faLock}  />
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              Login
            </a>
            </Col>
        </Container>
      </Navbar>
      
    )
    
}

export function NavLogo(){
  return(
    <Navbar bg="light" className="d-none d-sm-block" expand="lg">
        <Container>
          <Col md={4}>
            <Image src="/logo-pmac.svg" alt="Vercel Logo" className="mt-2" width={222} height={130} />
          </Col>
          <Col md={{ span: 4, offset: 4 }} className="mr-2 text-end">
          
          </Col> 
          
        </Container>
      </Navbar>
    
  )
  
}

export function NavMenu(){
  return(
    <Navbar bg="light" expand="lg">
      <Container>
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
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
    
  )
  
}
