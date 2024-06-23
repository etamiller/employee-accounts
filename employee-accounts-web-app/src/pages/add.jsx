import { Outlet, Link} from "react-router-dom"

export function Add() {
    return(
        <>
            <h1>This is the add page</h1>
           <Outlet> </Outlet> 
        </>
    )
}