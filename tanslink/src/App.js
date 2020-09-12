import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import jwt_decode from "jwt-decode";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import RoleRoute from "./RoloRoute";

import AdminSidebar from "./pages/Admin/AdminSidebar";
import AdminMainPanel from "./pages/Admin/AdminMainPanel";

import AsliDashboard from "./dashboardHandler";

import Sidebar from "./pages/Super Admin/Sidebar";
import MainPanel from "./pages/Super Admin/MainPanel";
import LogIn from "./pages/Super Admin/Login";
import Dashboard from "./pages/Super Admin/Dashboard";
import Table from "./pages/Super Admin/drivers";
import Wallet from "./pages/Super Admin/Wallet";
import Users from "./pages/Super Admin/Users";
import Vehicle from "./pages/Super Admin/vehicle";
import Maps from "./pages/Super Admin/Maps";
import SignUp from "./pages/Super Admin/addUser";
import AddVehicle from "./pages/Super Admin/addVehicle";
import AddUser from "./pages/Super Admin/addUser";

class App extends Component {
  render() {
    //   let loginCheck = false;
    //   let decoded = localStorage.jwt_decode && jwt_decode(localStorage.jwtToken);
    // let role = decoded && decoded.data && decoded.data.role;

    //   if (localStorage.jwtToken) {
    //     console.log("Into localStorage.jwtToken", localStorage.jwtToken);

    //     const decoded = jwt_decode(localStorage.jwtToken);
    //     console.log("decoded data: ", decoded);
    //     loginCheck = true;
    //     role = decoded.data.role;
    // }

    // console.log(" with role: ", role);

    // let routes = (
    //   <Switch>

    {
      /* <PrivateRoute 
       exact
       path={'/superadmin-dashboard'}
       component={() => (
         <>
         <Sidebar></Sidebar>
         <MainPanel></MainPanel>
         </>
       )} /> */
    }

    // //    <PrivateRoute
    // //        exact
    // //        path={'/dashboard'}
    // //        component={AsliDashboard} />

    // //               <PrivateRoute path="/table" component={Table} />
    // //               <PrivateRoute path="/users" component={Users} />
    // //               <PrivateRoute path="/vehicle" component={Vehicle} />
    // //               <PrivateRoute path="/wallet" component={Wallet} />
    // //               <PrivateRoute path="/adduser" component={AddUser} />
    // //               <PrivateRoute path="/addvehicle" component={AddVehicle} />

    // //       <Route
    // //        exact
    // //        path={'/login'}
    // //        component={LogIn} />

    // //  </Switch>
    //   );

    return (
      <div className="wrapper">
        {/* <LogIn></LogIn> */}
        {/* <BrowserRouter>
          <Sidebar></Sidebar>
          <MainPanel></MainPanel>
        </BrowserRouter> */}
        <BrowserRouter>
          <AdminSidebar></AdminSidebar>
          <AdminMainPanel></AdminMainPanel>
        </BrowserRouter>
      </div>
    );
  }
}

export default withRouter(App);
