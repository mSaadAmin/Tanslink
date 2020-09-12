import React from 'react';

import styles from './Admin Assets/MainPanel.module.css';

import Navbar from '../Super Admin/Navbar';
import AdminContent from './AdminContent';
import Footer from '../Super Admin/Footer';



class AdminMainPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="main-panel">
             
                    <Navbar></Navbar>
                    <AdminContent></AdminContent>
                    <div className={styles.footer}>
                        <Footer></Footer>
                    </div>
                
            </div>
        );
    }
}
 
export default AdminMainPanel;