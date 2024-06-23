import { Outlet, Link} from "react-router-dom"

export function Retrieve() {
    return(
        <>
            <h1>This is the view employee page</h1>
           <Outlet> </Outlet> 
        </>
    )
}