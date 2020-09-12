import React from "react";

import axios from "axios";
import styles from "./Super Admin Assest/Wallet.module.css";

class Wallet extends React.Component {
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
      <div>
        <div>
          <h1 className={styles.credit}>{this.state.messages.totalincome}Rs</h1>
        </div>
        
      </div>
    );
  }
}

export default Wallet;
