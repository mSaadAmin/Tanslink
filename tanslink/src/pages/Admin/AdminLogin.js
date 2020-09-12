import React from 'react';

import styles from '../Super Admin/Super Admin Assest/login.module.css';
import axios from 'axios';
import jwt_decode from 'jwt-decode';



class AdminLogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          email: '',
          password: ''

        };
    }

    onChange = (e) => {
      const targetName = e.target.name;
      console.log('targetName: ', targetName, 'value: ', e.target.value);
      this.setState({
        [targetName]: e.target.value
      });
    }

    Submit = (e) => {
      e.preventDefault();
      const { 
        email,
        password,
      }  = this.state;
      const formData = {
        email:email,
        password:password,
      }
      axios.post("http://localhost:3000/api/login",
      formData
      ).then(result=>{
        console.log("checking message: ", result);
        const {token} = result.data;
        localStorage.setItem('jwtToken', token);
          this.props.history.push('/superadmin-dashboard');
      

        }).catch(err=>{
        console.log(err)
        })
    }



    render() { 
        return ( 
          <div className={styles.container}>
            <div className={styles.innerfrom} >
            <div className= "login-form">
            <div className="name ">
              <h1>TansLink</h1>
             
            </div>
            <div className="header text"><h2>Login</h2></div>
            <form >
              <div className="form-group ">
                 
                <input type="email" name="email" onChange={this.onChange} className="form-control" placeholder="Email"/>
              </div>
    
              <div className="form-group">
                
                <input
                  type="password"
                  name="password"
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Password"/>
              </div>
              <div className="form-group">
            
            <button type="submit" onClick={this.Submit} className="btn btn-primary pull-left">Login    </button>
                    
            </div>
            
            </form>
            </div>
            </div>
            </div>
         );
    }
}
 
export default AdminLogIn;