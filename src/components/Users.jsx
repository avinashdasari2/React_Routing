import {  useParams, useLocation, useNavigate  } from "react-router-dom"

function User(){

    const params = useParams();
    const {name} = params;
    console.warn(name);
    
    
const Child = ({name}) => {

    return(
        <div>
        {name ? (
            <h4>The <code>name</code> in the query string is <strong>{name}</strong></h4>
        ): (
            <h3>There is no name in the query string.</h3>
        )}
        
        </div>
    )
}

function useQuery(){
    return new URLSearchParams(useLocation().search);

}

let query = useQuery();


const navigate = useNavigate();

    return(
        <>
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur architecto ducimus pariatur tempore nemo perferendis eaque et repudiandae exercitationem odio dolor, porro quam fugiat accusamus, nobis a beatae officiis qui itaque nesciunt distinctio nostrum! Temporibus illum repudiandae doloremque impedit facere amet et iste excepturi ipsa cumque, consectetur vero nulla.</p>
        
        <Child name={query.get("name")} />

        <button onClick={() => navigate('feedback')} style={{padding:"7px", backgroundColor:"blue", color:"white"}}>Feedback</button>

        </>
    )

}
export default User