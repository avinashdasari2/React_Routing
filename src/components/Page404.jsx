import { Link } from "react-router-dom";
import logo from './404-error-not-found-page-lost.png'

export default function(){
    return(
        <>
        <h1>Page Not Found</h1>
        <img src={logo} width="600px" height="400px" alt="" style={{marginLeft:"30px"}} />
        <div style={{marginLeft:"20px"}}>
        <h3>This URL is not correct.</h3>
        <Link to="/">Go to Home Page</Link>
        </div>
        </>
    )
}