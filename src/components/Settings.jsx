import { useNavigate } from "react-router-dom";

export default function(){
    const navigate = useNavigate();

    return(
        <>
        <h1>Settings</h1>
        <h2>Profile Details</h2>
        <div style={{marginLeft:"600px"}}>
        <div style={{display:"flex",}}><h3>User Name &emsp;: </h3><p style={{padding:"17px"}}>Admin</p></div>
        <div style={{display:"flex", marginTop:"-30px"}}><h3>Mail-Id &emsp;&emsp;&emsp;: </h3><p style={{padding:"17px"}}>admin@gmail.com</p></div>
        <div style={{display:"flex", marginTop:"-30px"}}><h3>Contact No &emsp;: </h3><p style={{padding:"17px"}}>+91 1234567890</p></div>
        </div>
        <button onClick={() => navigate('/')} style={{padding:"7px", backgroundColor:"blue", color:"white"}}>Go Home Page</button>

        </>
    )
}