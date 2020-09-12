import React from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {
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
            <Link className="nav-link" to="/users">
              <i className="material-icons">Users</i>
              <p>Users</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/wallet">
            <i className="material-icons">account_balance_wallet</i>
              <p>Wallet</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/table">
            <i className="material-icons">commute</i>
              <p>Drivers</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/vehicle">
            <i className="material-icons">commute</i>
              <p>Vehicles</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/adduser">
            <i className="material-icons">user</i>
              <p>Add Driver</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/addvehicle">
            <i className="material-icons">user</i>
              <p>Add Vehicles</p>
            </Link>
          </li>
        </ul>
      </div>
      </div>
    
         );
    }
}
 
export default Sidebar;