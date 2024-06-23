import { Outlet, Link} from "react-router-dom"

export function Contact() {
    return(
        <>
            <h1>This is the contact us page</h1>
           <Outlet> </Outlet> 
        </>
    )
}