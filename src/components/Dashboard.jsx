import { Link, Outlet } from "react-router-dom";

export default function(){

    return(
        <>
        <h1>  </h1>

        <nav>
        <div style={{display:"flex", marginLeft:"400px"}}>
        <div style={{width:"300px", height:"100px", backgroundColor:"lightblue", margin: "10px", padding: "20px"}}>
        <Link to="userprofile"><p style={{color:"black", padding:"30px"}}>User Profile</p></Link>
        </div>
        <div style={{width:"300px", height:"100px", backgroundColor:"lightblue",margin: "10px", padding: "20px"}}>
        <Link to="settings"><p style={{color:"black", padding:"30px"}}>&emsp;Settings</p></Link>
        </div>
        </div>
        </nav>
        <Outlet />
        </>
    )

}