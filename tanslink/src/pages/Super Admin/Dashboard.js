import React from "react";
import axios from "axios";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: "" };
  }
  componentDidMount() {
    axios
      .post("http://localhost:3000/api/showwallet", {
        id: "5ed4c74a31b1ff031ccb3d4a",
      })
      .then((result) => {
        console.log(result);
        this.setState({ messages: result.data.message });
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
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-warning card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">content_copy</i>
                  </div>
                  <p className="card-category">No of Trips</p>
                  <h3 className="card-title">
                    {this.state.messages.totaltrips}
                    <small>Trips</small>
                  </h3>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-success card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">store</i>
                  </div>
                  <p className="card-category">Revenue</p>
                  <h3 className="card-title">
                    {this.state.messages.totalincome} Rs
                  </h3>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-chart">
                <div className="card-header card-header-success"></div>
                <div className="card-body">
                  <h4 className="card-title">Daily Sales</h4>
                  <p className="card-category">
                    <span className="text-success">55% </span> increase in today
                    sales.
                  </p>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
