import React from 'react'
import Navigation from './nav'
import '../Styles/login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foodie from '../images/foodie.jpg';
export default function Login() {
  return (
    <div>
        <Navigation/>
      <Container className='lgbx'>
    <Row>
       
        <Col>
        <h1>Login</h1>
        <br/>
       
        <Form>
            
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
      </Col>
        <Col>
        <img src={foodie} className='foodieimg' alt="" /></Col>
    </Row>
      </Container>
    </div>
  )
}
