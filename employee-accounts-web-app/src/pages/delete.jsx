import { Outlet, Link} from "react-router-dom"
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'



const initialList1 = [
    {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    position: 'UX Designer',
    location: 'Baltimore',
    phone: '1234567890',
    email: 'jdoe@gmail.com'
    }
  ];

  const initialList2 = [
    {
    id: 2,
    firstName: 'Sam',
    lastName: 'Smith',
    position: 'IT',
    location: 'Baltimore',
    phone: '4102345678',
    email: 'ssmith@gmail.com'
    }
  ];

  export function Delete() {
    function removeEmployee1(id) {
        const newList1 = initialList1.filter((item) => item.id !== id);
   
        setList1(newList1);
    }
    const [list1, setList1] = React.useState(initialList1);

    function removeEmployee2(id) {
        const newList2 = initialList2.filter((item) => item.id !== id);
   
        setList2(newList2);
    }
    const [list2, setList2] = React.useState(initialList2);
   
    return(
        <>
       <Container>
        <Col style={{margin:'20px'}}>
            <Row style={{margin: '10px'}}>
            <Accordion defaultActiveKey={"0"}>
            <Accordion.Item>
                <Accordion.Header>Employee #1</Accordion.Header>
                <Accordion.Body>
                <ul>
                {list1.map((item) => (
                <li key={item.id}>
                    <Col>
                        <Row>
                            <Col>
                            <h6>First Name:</h6>
                            {item.firstName}
                            </Col>
                            <Col>
                            <h6>Last Name:</h6>
                            {item.lastName}
                            </Col>
                            <Col>
                            <h6>Location:</h6>
                            {item.location}
                            </Col>
                            <Col>
                            <h6>Position:</h6>
                            {item.position}
                            </Col>
                            <Col>
                            <h6>Phone:</h6>
                            {item.phone}
                            </Col>
                            <Col>
                            <h6>Email:</h6>
                            {item.email}
                            </Col>
                        </Row>
                        <Row style={{padding: '30px'}}>
                        <Button type="button" onClick={() => removeEmployee1(item.id)}>
                        Delete Employee Profile
                        </Button>
                        </Row>
                    </Col>
                </li>
                ))}
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </Row>

            <Row style={{margin:'10px'}}>
            <Accordion defaultActiveKey={"0"}>
            <Accordion.Item style={{listStyleType: 'none'}}>
                <Accordion.Header>Employee #2</Accordion.Header>
                <Accordion.Body>
                <ul>
                {list2.map((item) => (
                <li key={item.id}>
                    <Col>
                        <Row>
                            <Col>
                            <h6>First Name:</h6>
                            {item.firstName}
                            </Col>
                            <Col>
                            <h6>Last Name:</h6>
                            {item.lastName}
                            </Col>
                            <Col>
                            <h6>Location:</h6>
                            {item.location}
                            </Col>
                            <Col>
                            <h6>Position:</h6>
                            {item.position}
                            </Col>
                            <Col>
                            <h6>Phone:</h6>
                            {item.phone}
                            </Col>
                            <Col>
                            <h6>Email:</h6>
                            {item.email}
                            </Col>
                        </Row>
                        <Row style={{padding: '30px'}}>
                        <Button type="button" onClick={() => removeEmployee2(item.id)}>
                        Delete Employee Profile
                        </Button>
                        </Row>
                    </Col>
                </li>
                ))}
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </Row>
        </Col>
        </Container>
        
        <Outlet> </Outlet>
        </>
 
    );
}  
 
export default Delete;