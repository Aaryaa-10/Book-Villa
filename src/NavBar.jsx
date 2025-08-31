import {Link} from 'react-router-dom';
import './css/style.css';
function NavBar(){
    return (
        //a navbar showing links
        <div className='nav'>
            <ul className='links'>
            <li><Link to='/'>Home</Link></li>
           {/* <li><Link to='/next'>Next</Link></li> */}<li><Link to="/add-review">AddReview</Link></li> 
           </ul>
            
           


        </div>
    )
}
export default NavBar;