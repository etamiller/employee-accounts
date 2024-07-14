import { useState } from "react";
import { Container, ListGroup, Button, Form, Row, Col, Dropdown } from 'react-bootstrap';
import './update.css';
// import '../navy-1.png';
import employeeImage from '../profile.png'; // Import your image
import navyBackground from '../navy-1.png'; // Import navy background image
import { Alert } from "react-bootstrap";
export function Update() {
    const lists = [
        [
            { key: 'Last Name', value: 'Doe' },
            { key: 'First Name', value: 'John' },
            { key: 'Date of Birth', value: '01/01/2001'},
            { key: 'Email', value: 'johndoe@accounts.net'},
            { key: 'Phone', value: '234-567-8900'},
            { key: 'Position', value: 'Full Stack Developer'},
            { key: 'Location', value: 'Maryland'}
        ],
        [
            { key: 'Last Name', value: 'Jones' },
            { key: 'First Name', value: 'Sally' },
            { key: 'Date of Birth', value: '02/02/2002'},
            { key: 'Email', value: 'sallyjohn@accounts.net'},
            { key: 'Phone', value: '543-765-3900'},
            { key: 'Position', value: 'Intern'},
            { key: 'Location', value: 'Virginia'}
        ],
        [
            { key: 'Last Name', value: 'Gold' },
            { key: 'First Name', value: 'Chaim' },
            { key: 'Date of Birth', value: '03/03/2003'},
            { key: 'Email', value: 'chaimgold@accounts.net'},
            { key: 'Phone', value: '534-705-3320'},
            { key: 'Position', value: 'Manager'},
            { key: 'Location', value: 'Virginia'}
        ]
    ];

    const [account, setAccount] = useState(lists);
    const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null); // Track selected employee index
    const [selectedItemKey, setSelectedItemKey] = useState(null);
    const [newValue, setNewValue] = useState('');
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const handleEmployeeSelect = (index) => {
        setSelectedEmployeeIndex(index);
        setSelectedItemKey(null); // Reset selectedItemKey when a new employee is selected
        setShowUpdateForm(false); // Hide update form when a new employee is selected
    };

    const updateValue = () => {
        if (selectedEmployeeIndex !== null && selectedItemKey !== null && newValue !== '') {
            // Create a copy of the current lists state
            const updatedLists = [...account];
            
            // Find the correct list and update the selected item's value
            updatedLists[selectedEmployeeIndex] = updatedLists[selectedEmployeeIndex].map(item => {
                if (item.key === selectedItemKey) {
                    return { ...item, value: newValue };
                }
                return item;
            });

            // Update the state with the modified lists
            setAccount(updatedLists);
            setNewValue('');
            setShowUpdateForm(false);
        }
    };



    return (
        <>
            <div className="background-image">
                <div className="employee-image">
                <Container fluid >
                    <div>
                    <Alert className="within-overlay" style={{boxShadow: '0 30px 20px 10px #152235', borderRadius: '0', backgroundColor: 'white',borderTop: '5px solid',borderBottom: '5px solid',color: '#5D9D67', borderColor: '#5D9D67', opacity: '80%'}}>
                        <h1 style={{opacity:"100%", textShadow: '1px 1px 2px #152235', fontSize: '30px', fontWeight: 'bold',  fontFamily: 'Times-New-Roman', letterSpacing: '100 px', textTransform: 'uppercase'}}>Update an <br/>Employee Account</h1>
                    </Alert>
                        {/* <Row className="within-overlay"><br/><h1>Update Employee <br/>Profiles<br/></h1></Row> */}
                    <Row >
                        <br/>
                        {/* Left column for employee dropdown */}
                        <Col className="overlay-section " >
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Select Employee
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {account.map((list, index) => (
                                        <Dropdown.Item key={index} onClick={() => handleEmployeeSelect(index)}>
                                            {list.find(item => item.key === 'Last Name').value}, {list.find(item => item.key === 'First Name').value}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        {/* Middle column for field dropdown and update text box */}
                        <Col className="non-overlay-bottom">
                            {selectedEmployeeIndex !== null && (
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Select Field to Update
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {lists[selectedEmployeeIndex]?.map((item) => (
                                            <Dropdown.Item key={item.key} onClick={() => {
                                                setSelectedItemKey(item.key);
                                                setShowUpdateForm(true);
                                                setNewValue(item.value);
                                            }}>
                                                {item.key}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            )}

                            {showUpdateForm && selectedItemKey !== null && (
                                <div className="non-overlay-lowest">
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            placeholder={selectedItemKey}
                                            value={newValue}
                                            onChange={(e) => setNewValue(e.target.value)} />
                                    </Form.Group>
                                    <Button onClick={updateValue}>Update {selectedItemKey}</Button>
                                </div>
                            )}
                        </Col>

                        {/* Right column for employee info */}
                        <Col className="non-overlay">
                            {selectedEmployeeIndex !== null && (
                                <Container>
                                    <h2 className="white-text">Employee Information</h2>
                                    <ListGroup style={{opacity:"75%"}}>
                                        {account[selectedEmployeeIndex].map((item) => (
                                            <ListGroup.Item key={item.key} >
                                                <Row>
                                                    <Col sm={6}>
                                                        <h5>{item.key}:</h5>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <h5>{item.value}</h5>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Container>
                            )}
                        </Col>
                    </Row>
                    </div>
                </Container>
                </div>
            </div>

        </>
    );
}
