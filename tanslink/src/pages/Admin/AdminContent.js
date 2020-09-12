import React from 'react';

import { Switch,Route } from 'react-router-dom';

import AdminDashboard from './admindashboard';
import AdminWallet from './AdminWallet';
import Profile from './editProfile';
import Vehicle from './vehicle';



class AdminContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Switch>
              <Route exact path="/" component={AdminDashboard}></Route>
              <Route path="/dashboard" component={AdminDashboard}></Route>
              <Route path="/vehicle" component={Vehicle}></Route>
              <Route path="/wallet" component={AdminWallet}></Route>
              
              <Route path="/editprofile" component={Profile}></Route>
              
            
            </Switch>
        );
    }
}
 
export default AdminContent;