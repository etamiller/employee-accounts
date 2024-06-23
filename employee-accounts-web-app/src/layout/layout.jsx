import { Outlet, Link} from "react-router-dom"

export function Layout() {
    return(
        <>
            <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Employee Profile</Link>
                    </li>
                    <li>
                        <Link to="/retrieve">View Employee Profile</Link>
                    </li>
                    <li>
                        <Link to="/update">Update Employee Profile</Link>
                    </li>
                    <li>
                        <Link to="/delete">Delete Employee Profile</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            </header>
           <Outlet> </Outlet> 
        </>
    )
}