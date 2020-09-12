import React from "react";
import axios from "axios";

class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }
  componentDidMount() {
    axios
      .post("http://localhost:3000/api/getvehicles")
      .then((result) => {
        this.setState({ messages: result.data.message });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deleteVehicle(userid) {
    console.log("checkings");
    axios
      .post("http://localhost:3000/api/deletevehicle", { id: userid })
      .then((result) => {
        console.log("checking message: ", result);
        axios
          .post("http://localhost:3000/api/getvehicles")
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
                  <h4 className="card-title ">Vehicle Data</h4>
                  <p className="card-category">
                    All the Vehicle Register On TansLink
                  </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Model No.</th>
                        <th>About</th>
                        <th>Action</th>
                      </thead>
                      <tbody>
                        {this.state.messages.map((vehicle) => {
                          return (
                            <tr>
                              <td>{vehicle._id}</td>
                              <td>{vehicle.name}</td>
                              <td>{vehicle.modelno}</td>
                              <td>{vehicle.about}</td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.deleteVehicle(vehicle._id)
                                  }
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

export default Vehicle;
