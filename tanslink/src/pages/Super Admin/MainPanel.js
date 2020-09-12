import React from 'react';


import Content from './Content';
import Footer from './Footer';
import styles from './Super Admin Assest/MainPanel.module.css';
import Navbar from './Navbar';

class MainPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="main-panel">
             
                    <Navbar></Navbar>
                    <Content></Content>
                    <div className={styles.footer}>
                        <Footer></Footer>
                    </div>
                
            </div>
        );
    }
}
 
export default MainPanel;