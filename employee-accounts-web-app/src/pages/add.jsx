
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

export function Add() {
  const [validated, setValidated] = useState(false);
  const [list, setList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [position, setPosition] = useState("");
  const [create, setCreate] = useState("No Employee Added");


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  function createList() {
    setCreate('Employee Added')
    };

    function updateList() {
        setList(list.concat(firstName + lastName, email, phone, address, city + state + zip, position));
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setCity('')
        setState('')
        setZip('')
        setPosition('')
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
            onChange={event => setFirstName(event.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Otto"
            onChange={event => setLastName(event.target.value)}
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
      <Button type="submit" onClick={updateList}>Submit Employee Information</Button>
      <Row className="mb-3">
          <Col>
            <Card>

              <Card.Body>
                  <Card.Title>{listKey}</Card.Title>
                    {list.map((l, index) => {
                      return <Card.Text key={index}>{l}</Card.Text>
                    })}
                  <Button variant="primary" onClick={createList}>Create Employee</Button>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row className="mb-3">
        <col>
          <Alert key='primary' variant='primary'>
            {create}
          </Alert>
          {setCreate("No Emplyee Added")}
        </col>
      </Row>

    </Form>
  );
}
