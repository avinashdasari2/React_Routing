import { Outlet, Link } from "react-router-dom"
import './UserProfile.css'
export default function(){

    return(
        <>
        <h1>User Profile's</h1>
        <Link to="/users/Bhavishya?name=Bhavishya"><h3>Bhavishya</h3></Link>
        <Link to="/users/Bibek?name=Bibek"><h3>Bibek</h3></Link>
        {/* <Link to="/users/Avinash?name=Avinash"><h3>Avinash</h3></Link> */}
        <Link to="/users/john?name=John"><h3>John</h3></Link>
        <Outlet></Outlet>
        </>
    )

}