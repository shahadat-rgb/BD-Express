import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  const {cart}= props
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
        <Link to='/review'>
        <h4 className="nav-link text-dark" ><FontAwesomeIcon icon={faShoppingCart}/>Order Item</h4> 
        </Link>
        <div style={count}>{cart.length}</div>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;
