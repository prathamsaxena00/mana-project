import React from 'react'
import '../Styles/customer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import custom from '../images/custom.jpg';
import custom5 from '../images/custom5.jpg'
import custom6 from '../images/custom6.jpg'
import Carousel from 'react-bootstrap/Carousel';


import Col from 'react-bootstrap/Col';
export default function Customer() {
  return (
    <div>
        <br/>
        <br/>

      <Container>
        <Row>
        <h3 align="center" className='sbtitle'>Happy Customers All Over India </h3>
</Row>
<br/>
        <Row>
            <Col><img src={custom} alt="" className='cimg1' />
            </Col>
            <Col><img src={custom5} alt="" className='cimg1' /></Col>
            <Col><img src={custom6} alt="" className='cimg1' /></Col>

        </Row>
        <Carousel  className='crsl'>
      <Carousel.Item>
        <img
          className="d-block w-100 cimg1"
          src={custom}
          alt="First slide"
          
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cimg1"
          src={custom5}
          alt="Second slide"
          
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cimg1"
          src={custom6}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
      </Container>
    </div>
  )
}
