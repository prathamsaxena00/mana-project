import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navigation from './nav';
import cook from '../images/cook.webp';
import '../Styles/signup.css'
const Step1 = ({ onNext }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
   <>
    <Navigation/>
    <Container className='snbx'>
      <Row>
        <Col>
        <h2>Sign Up </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            </Form.Group>
            <br/>
            <Button variant="dark" type="submit">Next</Button>
          </Form>
        </Col>
        <Col>
        <img src={cook} className='cookimg' alt="" />
        </Col>
      </Row>
    </Container>
   </>
  );
};

const Step2 = ({ onNext }) => {
  const [formData, setFormData] = useState({ address: '', city: '', pincode: '', state: '', phoneNumber: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
   <>
    <Navigation/>
    <Container className='snbx'>
      <Row>
        <Col>
        <h2>Sign Up </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" name="address" value={formData.address} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" name="city" value={formData.city} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="pincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="text" placeholder="Enter pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter state" name="state" value={formData.state} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </Form.Group>
            <br/>
            <Button variant="dark" type="submit">Next</Button>
          </Form>
        </Col>
        <Col>
        <img src={cook} className='cookimg' alt="" />
        </Col>
      </Row>
    </Container></>
  );
};

const Step3 = ({ onNext }) => {
  const [formData, setFormData] = useState({ kitchenName: '', speciality: '' });
  const [specialities, setSpecialities] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddSpeciality = () => {
    if (formData.speciality.trim() !== '') {
      setSpecialities([...specialities, formData.speciality]);
      setFormData({ ...formData, speciality: '' });
    }
  };

  const handleSubmit = () => {
    onNext({ ...formData, specialities });
  };

  return (
   <>
    <Navigation/>
    <Container className='snbx'>
      <Row>
        <Col>
        <h2>Sign Up </h2>
          <Form>
            <Form.Group controlId="kitchenName">
              <Form.Label>Kitchen Name</Form.Label>
              <Form.Control type="text" placeholder="Enter kitchen name" name="kitchenName" value={formData.kitchenName} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="speciality">
              <Form.Label>Speciality</Form.Label>
              <Form.Control type="text" placeholder="Enter speciality" name="speciality" value={formData.speciality} onChange={handleChange} />
            </Form.Group>
            <Button variant="dark" onClick={handleAddSpeciality}>Add</Button>
            <ul>
              {specialities.map((speciality, index) => (
                <li key={index}>{speciality}</li>
              ))}
            </ul>
            <Button variant="dark" onClick={handleSubmit}>Done</Button>
          </Form>
        </Col>
        <Col>
        <img className='cookimg' src={cook} alt="" />
        </Col>
      </Row>
    </Container></>
  );
};

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const steps = {
    1: <Step1 onNext={handleNext} />,
    2: <Step2 onNext={handleNext} />,
    3: <Step3 onNext={handleNext} />,
  };

  return (
    <div>
      {steps[step]}
      {step !== 1 && <Container><br/><Button onClick={handlePrev}  variant="dark">Previous</Button></Container>}
    </div>
  );
};

export default SignupForm;
