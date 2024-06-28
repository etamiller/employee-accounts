import { Outlet, Link} from "react-router-dom"
import React from 'react';

const initialList = [
    {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    dob: 1996,
    },
    {
    id: 2,
    firstName: 'Dave',
    lastName: 'Davids',
    dob: 1990,
    },
    {
    id: 3,
    firstName: 'Sam',
    lastName: 'Simmons',
    dob: 1978,
    },
  ];


export function Delete() {
    function removeEmployee(id) {
        const newList = list.filter((item) => item.id !== id);
    
        setList(newList);
    }
    const [list, setList] = React.useState(initialList);
    return(
        <>
        <Accordion defaultActiveKey="" >
        <Accordion.Item eventKey="0">
                <Accordion.Header>Employee Account #1</Accordion.Header>
                <Accordion.Body>
                <Container>
                    <ListGroup>
                        {account.map((item) => (
                            <ListGroup.Item key={item.key}>
                            <h5>{item.key+":\t\t"}{item.value}</h5>
                            <Button onClick={() => {
                                setSelectedItemKey(item.key);
                                 setShowUpdateForm(true);
                                 }}>Update</Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                   
                    {showUpdateForm && (
                        <div>
                            <Form.Group>
                            <Form.Label>Enter Updated {selectedItemKey} Below:</Form.Label>
                            <Form.Control
                                type="text"
                                value={newValue}
                                onChange={(e) => setNewValue(e.target.value)}/>
                            </Form.Group>
                            <Button onClick = {updateValue}>Update {selectedItemKey}</Button>
                        </div>
                    )}
 
                </Container>
 
                </Accordion.Body>
            </Accordion.Item>
        {/* <ul>
        {list.map((item) => (
        <li key={item.id}>
            <span>{item.firstName}</span>
            <span>{item.lastName}</span>
            <span>{item.dob}</span>
            <button type="button" onClick={() => removeEmployee(item.id)}>
                Remove
            </button>
        </li>
        ))}
        </ul> */}
        <h1>This is the delete employee page</h1>
        <Outlet> </Outlet> 
        </>
  
    ); 

export default Delete;