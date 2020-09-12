import React from "react";
import axios from "axios";

class Driver extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }
  componentDidMount() {
    axios
      .post("http://localhost:3000/api/showdrivers", { role: "driver" })
      .then((result) => {
        this.setState({ messages: result.data.message });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deleteDriver(userid) {
    console.log("checkings");
    axios
      .post("http://localhost:3000/api/deleteuser", { id: userid })
      .then((result) => {
        console.log("checking message: ", result);
        axios
          .post("http://localhost:3000/api/showdrivers")
          .then((result) => {
            this.setState({ messages: result.data.message });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">Drivers</h4>
                  <p className="card-category">
                    All the Drivers Register on TansLink
                  </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <th>ID</th>
                        <th>Name</th>
                        <th>contact</th>
                        <th>Liceence No.</th>
                        <th>Rating</th>
                        <th>Address</th>
                        <th>CNIC</th>
                        <th>Action</th>
                      </thead>
                      <tbody>
                        {this.state.messages.map((driver) => {
                          return (
                            <tr>
                              <td>{driver._id}</td>
                              <td>{driver.name}</td>
                              <td>{driver.contact}</td>
                              <td>{driver.driverdetails.licence}</td>
                              <td>{driver.averagerating}</td>
                              <td>{driver.driverdetails.address}</td>
                              <td>{driver.driverdetails.cnic}</td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => this.deleteDriver(driver._id)}
                                >
                                  Delete{" "}
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Driver;
