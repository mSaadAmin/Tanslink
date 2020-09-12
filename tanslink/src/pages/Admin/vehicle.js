import React from "react";
import axios from "axios";
import { message } from "antd";

class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: "" };
  }

  componentDidMount() {
    console.log("check");
    axios
      .post("http://localhost:3000/api/showvehiclerecord", {
        id: "5ed4c74a31b1ff031ccb3d4a",
      })
      .then((result) => {
        console.log("checking this line");
        this.setState({ messages: result.data.message });
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // setState ={
  //     name:{message.name},
  //     number:"",
  //     colour:"",
  //     modelno:'',
  //     mileage:'',
  //     seats:'',
  //     about:'',
  // }

  render() {
    let { name, colour, modelno, number, mileage, seats, about } = this.state;

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Vehicle </h4>
                  <p className="card-category">Add A New Vehicle </p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            Vehicle Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Color</label>
                          <input
                            type="text"
                            name="colour"
                            value={colour}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">Milage</label>
                          <input
                            type="text"
                            name="mileage"
                            value={mileage}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">Seats</label>
                          <input
                            type="text"
                            name="seats"
                            value={seats}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            Model Number
                          </label>
                          <input
                            type="text"
                            name="modelno"
                            onChange={this.onChange}
                            value={modelno}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            Vehicle Number
                          </label>
                          <input
                            type="text"
                            name="number"
                            onChange={this.onChange}
                            value={number}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">About</label>
                          <input
                            type="text"
                            name="about"
                            onChange={this.onChange}
                            value={about}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

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

export default Vehicle;
