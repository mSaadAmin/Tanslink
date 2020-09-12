import React from 'react';

import styles from '../assets/signup.module.css';



class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          owner:"5ed4c74a31b1ff031ccb3d4a",
          name:"",
          number:"",
          colour:"",
          modelno:'',
          mileage:'',
          seats:0,
          about:'',
          driver:'5ed4c54131b1ff031ccb3d47'
         }
    }
    // signupUser(){
    //   const data ={
    //     name:this.state.name,
    //     email:this.state.email,
    //     ...
    //   }
    // }
    render() { 
        return ( 
          <div className={styles.container}>
            <div className={styles.innerfrom} >
            <div className= "login-form">
            <div className="name ">
              <h1>TansLink</h1>
             
            </div>
            <div className="header text"><h2>Sign Up</h2></div>
            <form >
              <div className="form-group ">
              <input type="email" name="email" className="form-control" placeholder="Name"/>
                 
                <input type="email" name="email" className="form-control" placeholder="Email"/>
             
    
              <div className="form-group">
                
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"/>
              </div>
              <div className="form-group">
              <input type="text" name="Address" className="form-control" placeholder="Address"/>
              
              <input type="number" name="contact" className="form-control" placeholder="Contact"/>

              <input type="number" name="cnic" className="form-control" placeholder="CNIC"/>
              </div>
            <button type="submit" className="btn btn-primary pull-left">Sign Up   </button>
                    
            </div>
            
            </form>
            </div>
            </div>
            </div>
         );
    }
}
 
export default SignUp;