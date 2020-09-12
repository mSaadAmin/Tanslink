import React from "react";

import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Table from "./drivers";
import Wallet from "./Wallet";
import Users from "./Users";
import Vehicle from "./vehicle";
import SignUp from "./addUser";
import AddVehicle from "./addVehicle";
import AddUser from "./addUser";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/table" component={Table}></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/vehicle" component={Vehicle}></Route>
        <Route path="/wallet" component={Wallet}></Route>
        <Route path="/adduser" component={AddUser}></Route>
        <Route path="/addvehicle" component={AddVehicle}></Route>
      </Switch>
    );
  }
}

export default Content;
