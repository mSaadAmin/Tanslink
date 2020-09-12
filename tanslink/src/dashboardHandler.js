import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import AdminSidebar from './pages/Admin/AdminSidebar';
import AdminMainPanel from './pages/Admin/AdminMainPanel';

import Sidebar from './pages/Super Admin/Sidebar';
import MainPanel from './pages/Super Admin/MainPanel';


let role = '';

if (localStorage.jwtToken) {
    
    const decoded = jwt_decode(localStorage.jwtToken);
    console.log("decoded data: ", decoded);
    role = decoded && decoded.data && decoded.data.role;
}



function Welcome(props) {
    let content = '';
    if(role && role === 'superadmin'){
        content = (

            <>
               <Sidebar></Sidebar>
         <MainPanel></MainPanel>
            </>
        );
    }
    else{

        content = (

            <>
               <AdminSidebar></AdminSidebar>
         <AdminMainPanel></AdminMainPanel>
            </>
        );
    }

    return content;
}

export default Welcome;