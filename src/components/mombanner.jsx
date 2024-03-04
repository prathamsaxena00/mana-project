import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import mommm from '../images/mommm.png';
import heart from '../images/heart.png'
import '../Styles/momban.css'

export default function Mombanner() {
  
  return (
    <div className='mombx'>
      <Container className='mmbx'>
        <Row>
          <Col>
          <img src={mommm} className="momimg" alt="" />
          </Col>
          <Col>

        <center className='momtxt'>
        <img src={heart} alt="" className='hrt1' />
        <img src={heart} alt="" className='hrt2'  />

            <p className='momct'><b>Home Cooked Food for everyone prepared <br/> with love and care</b></p>
       <br/> <Button className='mombtn' variant="dark" type="submit" >Explore More</Button>
        </center>
       
          </Col>
        </Row>
      </Container>
    </div>
  )
}
