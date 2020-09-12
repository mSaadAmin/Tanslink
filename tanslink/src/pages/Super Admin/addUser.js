import React from 'react';
import axios from 'axios';



class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          email:"",
          name:"",
          password:"",
          address:"",
          age:'',
          licence:'',
          cnic:'',
          contact:'',
         }
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
        name,
        password,
        contact,
        age,
        licence,
        address,
        cnic
      }  = this.state;
      const formData = {
        email:email,
        name:name,
        password:password,
        contact:contact,
        age:age,
        role:"driver",
        licence:licence,
        address:address,
        cnic:cnic
      }
      axios.post("http://localhost:3000/api/signup",
      formData
      ).then(result=>{
        console.log("checking message: ", result);
        }).catch(err=>{
        console.log(err)
        })
    }


    render() { 
      
          let {
            email,
            name,
            password,
            contact,
            age,
            licence,
            address,
            cnic}=this.state;
            return ( 
            <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">SignUp </h4>
                  <p className="card-category">Add A New Driver</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">Email address</label>
                          <input type="email" name="email" value={email} onChange={this.onChange} className="form-control" />
                        </div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Name</label>
                          <input type="text" name="name" value={name} onChange={this.onChange} className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">PassWord</label>
                          <input type="password" name="password" value={password} onChange={this.onChange} className="form-control" />
                        </div>
                      </div>
                    </div>
            
                    <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">Contact</label>
                          <input type="text" name="contact" value={contact} onChange={this.onChange} className="form-control" />
                        </div>
                      </div>
            
                      <div className="col-md-8">
                        <div className="form-group">
                          <label className="bmd-label-floating">Adress</label>
                          <input type="text" name="address" value={address} onChange={this.onChange} className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">Age</label>
                          <input type="text" name="age" value={age} onChange={this.onChange} className="form-control" />
                        </div>
                      </div>
                    
                    
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">Licence No</label>
                          <input type="text" className="form-control" name="licence" value={licence} onChange={this.onChange} />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">CNIC</label>
                          <input type="text" className="form-control" name="cnic" value={cnic} onChange={this.onChange}/>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary pull-right"  onClick={this.Submit}>Create Account</button>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
         );
    }
}
 
export default AddUser;