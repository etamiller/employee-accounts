import { Outlet, Link} from "react-router-dom"

export function Update() {
    return(
        <>
            <h1>This is the update employee page</h1>
           <Outlet> </Outlet> 
        </>
    )
}