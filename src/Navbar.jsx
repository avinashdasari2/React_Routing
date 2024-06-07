import { Link } from 'react-router-dom';
import './Navbar_Styles.css';

export default function(){


        return(
            <>
            <div className="navbar">
            <ul>
                <Link to="/"> <li>Home</li></Link>
                <Link to="/about"> <li>About</li></Link>
                <Link to="/dashboard"> <li>Dashboard</li></Link>
            </ul>
            </div>
            </>

        )

}