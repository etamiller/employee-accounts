<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> bbfd48e8 (changed accordion header to print employees name)
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
<<<<<<< HEAD
import Button from 'react-bootstrap/Button'




const initialList1 = [
    {
=======
import Button from 'react-bootstrap/Button';
const initialEmployees = [
  {
>>>>>>> bbfd48e8 (changed accordion header to print employees name)
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    position: 'UX Designer',
    location: 'Baltimore',
    phone: '1234567890',
    email: 'jdoe@gmail.com'
  },
  {
    id: 2,
    firstName: 'Sam',
    lastName: 'Smith',
    position: 'IT',
    location: 'Baltimore',
    phone: '4102345678',
    email: 'ssmith@gmail.com'
<<<<<<< HEAD
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
=======
  }
];
export function Delete() {
  const [employees, setEmployees] = useState(initialEmployees);
  const removeEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  };
  return (
    <Container>
      {employees.map((employee) => (
        <Col key={employee.id} style={{ margin: '20px' }}>
          <Row style={{ margin: '10px' }}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item>
                <Accordion.Header>{employee.lastName + `, ` + employee.firstName}</Accordion.Header>
>>>>>>> bbfd48e8 (changed accordion header to print employees name)
                <Accordion.Body>
                  <ul>
                    <li>
                      <Row>
                        <Col>
                          <h6>First Name:</h6>
                          {employee.firstName}
                        </Col>
                        <Col>
                          <h6>Last Name:</h6>
                          {employee.lastName}
                        </Col>
                        <Col>
                          <h6>Location:</h6>
                          {employee.location}
                        </Col>
                        <Col>
                          <h6>Position:</h6>
                          {employee.position}
                        </Col>
                        <Col>
                          <h6>Phone:</h6>
                          {employee.phone}
                        </Col>
                        <Col>
                          <h6>Email:</h6>
                          {employee.email}
                        </Col>
                      </Row>
                      <Row style={{ padding: '30px' }}>
                        <Button
                          type="button"
                          onClick={() => removeEmployee(employee.id)}
                        >
                          Delete Employee Profile
                        </Button>
                      </Row>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Col>
<<<<<<< HEAD
        </Container>
        

        </>
 
    );
}  
 


export default Delete;
=======
      ))}
    </Container>
  );
}
export default Delete;
>>>>>>> bbfd48e8 (changed accordion header to print employees name)
