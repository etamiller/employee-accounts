//import { Outlet, Link} from "react-router-dom"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export function Contact() {
    return(
        <>
            <h1>Contact Us</h1>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="email" title="Email">
                    employees@accounts.net
                </Tab>
                <Tab eventKey="phone" title="Phone">
                    1-800-123-4567
                </Tab>
                <Tab eventKey="mail" title="Mail" >
                    111 Employee Dr <br></br>
                    Baltimore, MD 21209 <br></br>
                    USA
                </Tab>

             </Tabs> 
        </>
    )
}