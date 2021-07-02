import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';
import 'bootstrap/dist/css/bootstrap.css';


function Header() {
  return (
    <header className= "container">
      <nav className="navbar navbar-expand-lg navbar bg-dark">
        <Link className="navbar-brand center" to="/">Community Chat</Link>
        <Link className="nav-item nav-link " to="/chat"  >Messages</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {auth().currentUser
            ? <div className="navbar-nav">
            
              <button className="btn btn-primary mr-3" onClick={() => auth().signOut()}>LogOut</button>
            </div>
            : <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/login">Sign In</Link>
              <Link className="nav-item nav-link mr-3" to="/signup">Sign Up</Link>
            </div>}
        </div>
        
      </nav>
    </header>
  );
}

export default Header;