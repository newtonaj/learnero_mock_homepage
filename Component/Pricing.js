import React, { Component } from "react";
import vector from "../learnero/Vector18.png";
import ten from "../learnero/10.png";
import fifteen from "../learnero/15.png";
import eighteen from "../learnero/18.png";

class Pricing extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(17, 17, 17)", padding: "50px 0" }}>
        <div
          style={{
            padding: "10px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2.2em", color: "white" }}>Pricing</h1>
          <img src={vector} alt="vector" />
        </div>
        <div className="prices">
          <img src={ten} alt="$10" />
          <img src={fifteen} alt="$15" />
          <img src={eighteen} alt="$18" />
        </div>
      </div>
    );
  }
}

export default Pricing;
