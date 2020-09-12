import React from 'react';
import { Link } from 'react-router-dom';


class AdminSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          
    <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      
      <div className="logo">
        <a href="#" className="simple-text logo-normal"> TansLink </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/dashboard">
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/editprofile">
              <i className="material-icons">Users</i>
              <p>Edit Profile</p>
            </Link>
          </li>
          
          <li className="nav-item ">
            <Link className="nav-link" to="/wallet">
            <i className="material-icons">account_balance_wallet</i>
              <p>Wallet</p>
            </Link>
          </li> 
          
          <li className="nav-item ">
            <Link className="nav-link" to="/vehicle">
            <i className="material-icons">account_balance_wallet</i>
              <p>Vehicle</p>
            </Link>
          </li> 
          <li className="nav-item ">
            <Link className="nav-link" to="/setting">
            <i className="material-icons">settings</i>
              <p>Log Out</p>
            </Link>
          </li>
        </ul>
      </div>
      </div>
    
         );
    }
}
 
export default AdminSidebar;