import { Outlet} from "react-router-dom"

export function Delete() {
   
    return(
        <>
        <h1>This is the delete employee page</h1>
        <Outlet> </Outlet> 
        </>
  
    ); 
}
export default Delete;