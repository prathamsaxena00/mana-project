import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import momfood from '../images/momfood.jpg';
import washingveg from '../images/washingveg.jpg';
import dish from '../images/dish.jpg';
import '../Styles/subanner.css'
export default function Subbanner() {
  return (
    <div>
      <Container className='subannerbx'>
        <Row>
            <h3 align="center" className='sbtitle'>Our Story and Services </h3>
        </Row>
        <Row className='cardsbx'>
            <Col>
            <Card style={{ width: '18rem' }} className='cards'>
      <Card.Img variant="top" src={momfood} />
      <Card.Body>
       
        <Card.Text>
        Empowering women ,House wives <br/>and giving them employment
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
            <Col>
            <Card style={{ width: '18rem' }} className='cards'>
      <Card.Img variant="top" src={washingveg} />
      <Card.Body>
       
        <Card.Text>
        We take cares of the hygiene,and mantain the quality of food 
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
            <Col>
            <Card style={{ width: '18rem' }} className='cards'>
      <Card.Img variant="top" src={dish} />
      <Card.Body>
       
        <Card.Text>
        We take cares of the hygiene,and mantain the quality of food 
        </Card.Text>
       
      </Card.Body>
    </Card>
            </Col>

        </Row>
      </Container>
    </div>
  )
}
