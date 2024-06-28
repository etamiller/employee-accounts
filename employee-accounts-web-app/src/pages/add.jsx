import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

export function Add() {
  const [validated, setValidated] = useState(false);
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    position: ''
  });
  const [create, setCreate] = useState('No Employee Added');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      updateList();
    }
  };

  const updateList = () => {
    const { firstName, lastName, email, phone, address, city, state, zip, position } = formData;
    const newEmployee = `${firstName} ${lastName}, ${email}, ${phone}, ${address}, ${city}, ${state} ${zip}, ${position}`;
    setList([...list, newEmployee]);
    setCreate('Employee Added');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      position: ''
    });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="my-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Mark"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Otto"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
         <Form.Group as={Col} md="5" controlId="validationCustom03">
           <Form.Label>Address</Form.Label>
           <Form.Control type="text" 
            placeholder="1234 North Street" 
            required 
            onChange={event => setAddress(event.target.value)}
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid street address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" 
            placeholder="Baltimore" 
            required 
            onChange={event => setCity(event.target.value)}
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom05">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" 
            placeholder="MD" 
            required 
            onChange={event => setState(event.target.value)}
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom06">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" 
          placeholder="21215" 
          required 
          onChange={event => setZip(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom07">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" 
            placeholder="012-345-6789" 
            required 
            onChange={event => setPhone(event.target.value)}
            />
          <Form.Control.Feedback type="invalid">
             Please provide a valid Phone number.
           </Form.Control.Feedback>
         </Form.Group>
         <Form.Group as={Col} md="4" controlId="validationCustom08">
           <Form.Label>Email</Form.Label>
           <Form.Control type="text" 
             placeholder="markotto@gmail.com" 
             required 
             onChange={event => setEmail(event.target.value)}
             />
           <Form.Control.Feedback type="invalid">
             Please provide a valid Email address.
           </Form.Control.Feedback>
         </Form.Group>
         <Form.Group as={Col} md="4" controlId="validationCustom09">
           <Form.Label>Position</Form.Label>
           <Form.Control type="text" 
             placeholder="Manager" 
             required 
             onChange={event => setPosition(event.target.value)}
             />
           <Form.Control.Feedback type="invalid">
             Please provide the Emolyee's position.
           </Form.Control.Feedback>
         </Form.Group>
       </Row >

      {/* Other form groups (address, city, state, zip, phone, email, position) go here */}
      <Button type="submit">Submit Employee Information</Button>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Employee List</Card.Title>
              {list.map((employee, index) => (
                <Card.Text key={index}>{employee}</Card.Text>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Alert key="primary" variant="primary">
            {create}
          </Alert>
        </Col>
      </Row>
    </Form>
  );
}
