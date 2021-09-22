import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer(){
    return(
        <Container className="mt-3">
          <Row>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Cool stuff</a></li>
              <li><a className="link-secondary" href="#">Random feature</a></li>
              <li><a className="link-secondary" href="#">Team feature</a></li>
              <li><a className="link-secondary" href="#">Stuff for developers</a></li>
              <li><a className="link-secondary" href="#">Another one</a></li>
              <li><a className="link-secondary" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Cool stuff</a></li>
              <li><a className="link-secondary" href="#">Random feature</a></li>
              <li><a className="link-secondary" href="#">Team feature</a></li>
              <li><a className="link-secondary" href="#">Stuff for developers</a></li>
              <li><a className="link-secondary" href="#">Another one</a></li>
              <li><a className="link-secondary" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Cool stuff</a></li>
              <li><a className="link-secondary" href="#">Random feature</a></li>
              <li><a className="link-secondary" href="#">Team feature</a></li>
              <li><a className="link-secondary" href="#">Stuff for developers</a></li>
              <li><a className="link-secondary" href="#">Another one</a></li>
              <li><a className="link-secondary" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Cool stuff</a></li>
              <li><a className="link-secondary" href="#">Random feature</a></li>
              <li><a className="link-secondary" href="#">Team feature</a></li>
              <li><a className="link-secondary" href="#">Stuff for developers</a></li>
              <li><a className="link-secondary" href="#">Another one</a></li>
              <li><a className="link-secondary" href="#">Last time</a></li>
            </ul>
          </div>
          </Row>
          <Row className="mt-3">
            <Col>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </Col>
            
          </Row>
        </Container>
    )
}