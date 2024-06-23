import { Outlet, Link} from "react-router-dom"

export function About() {
    return(
        <>
            <h1>This is the about page</h1>
           <Outlet> </Outlet> 
        </>
    )
}