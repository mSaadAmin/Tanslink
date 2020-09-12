import React from "react";
import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }
  componentDidMount() {
    axios
      .post("http://localhost:3000/api/getusers", { role: "user" })
      .then((result) => {
        this.setState({ messages: result.data.message });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteUser(userId){
    console.log("checkings");
    axios
      .delete("http://localhost:3000/api/deleteuser", userId)
      .then((result) => {
        console.log("checking message: ", result);
        axios
          .post("http://localhost:3000/api/getusers", { role: "user" })
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
  };

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">Users</h4>
                  <p className="card-category">
                    All the Users Register on TansLink
                  </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Action</th>
                      </thead>
                      <tbody>
                        {this.state.messages.map((user) => {
                          return (
                            <tr>
                              <td>{user._id}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.contact}</td>
                              <td>
                                <button
                                  onClick={() => this.deleteUser(user._id)}
                                  className="btn btn-danger"
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

export default Users;
