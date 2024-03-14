import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import curve from '../images/curve.png'
import logoweb from '../images/logoweb.png'
import thli from '../images/thli.png'
import leaf from '../images/leaf.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/banner.css'

export default function Banner() {
  return (
   
     <div className='allaround'>
               <Container className='bannerbox'>
               <img src={leaf} alt="" className='leaf1'/>
         <Row>
         <Col>
         <img src={logoweb} className='logoweb' alt="" />
         <p className='bannertitle'><b >A place for home cooked foods </b>
         </p>

         <Form className='searchbx'>
     <Row>
    <Col>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Search your favourite dishes" />
       
      </Form.Group>
    </Col>
      <Col>
      <Button variant="dark" type="submit" className='schbtn'>
        Search
      </Button>
      </Col>
     </Row>
    </Form>
         </Col>
         <Col>
         <img src={thli} className='thaaliimg' alt="" />
         </Col>
         </Row>
         <img src={leaf} alt="" className='leaf2' />
       </Container>
        <img src={curve} className='curveimg' alt="pratham" />
     </div>
       
   
  )
}
