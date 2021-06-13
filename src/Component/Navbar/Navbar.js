import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from '../../App';
import { handleSignOut } from '../Login/LoginManager';
const Navbar = (props) => {
  const {cartCount}=props
  const [loggedInUser, setLoggedInUser] = useContext(CartContext);
    let history = useHistory();

  const handleLoggingButton = () => {
    if (loggedInUser.name || loggedInUser.email) {
        handleSignOut()
      setLoggedInUser({});
      history.push("/");
    } else {
      history.push("/login");
    }
  };



    const count={
        color:"white",
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        backgroundColor:"orange",
        textAlign:"center",
        weight:"bold",
        fontSize:'23px',
        paddingTop:"6px"
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
     <Link style={{textDecoration:"none",color:"orange"}} to ='/'>
          <h1>BD Express</h1>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <div className="navbar-nav">
        <Link to='/home' style={{textDecoration:"none",paddingRight:"15px"}}>
           <h4 className='nav-link'>Home</h4>
        </Link>
       
      </div>
      <div className="navbar-nav">
             <h4 className='nav-link'>{loggedInUser.name}</h4>
      </div>

      <div className="navbar-nav">
        <Link to='/review' style={{textDecoration:"none"}}>
        <h4 className="nav-link">Order Item  <FontAwesomeIcon icon={faShoppingCart}/><strong className="text-primary"><b>({cartCount.length})</b></strong></h4> 
        </Link>
        {/* <div style={count}>{cartCount.length}</div> */}
      </div>
      <div className="navbar-nav pl-3">
       <button onClick={handleLoggingButton} className="btn btn-dark">
                    {loggedInUser.name || loggedInUser.email
                      ? "Logout"
                      : "Login"}
                  </button>
       </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;
