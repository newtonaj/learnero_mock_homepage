import React, { Component } from "react";
import vector from "../learnero/Vector18.png";
import frame from "../learnero/Frame-12.png";

export class Instructor extends Component {
  render() {
    return (
      <div
        style={{ background: "black", color: "white", paddingBottom: "150px" }}
      >
        <div style={{ textAlign: "center", padding: "30px" }}>
          <h1
            style={{
              fontSize: "2.5em",
              padding: "10px",
            }}
          >
            Become an Instructor
          </h1>
          <img src={vector} alt="vector" />
        </div>
        <div className="instructor-content">
          <img className="frame" src={frame} alt="" />
          <div>
            <h2 style={{ fontSize: "1.9em", padding: "20px" }}>
              Be a part of our community of Professional teachers
            </h2>
            <p style={{ padding: "20px" }}>
              Interact with teachers from the same field, gain am opportunity to
              expand your reach of students, join a diverse community of people
              from all over the world, share your skills with everyone, make an
              additional income and so much more!
            </p>
            <p
              style={{
                padding: "20px",
                fontSize: "2em",
                textDecoration: "underline",
              }}
            >
              Get started
            </p>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.2em",
            padding: "100px",
            backgroundColor: "rgb(17, 17, 17)",
          }}
        >
          <h1>Follow us on social media</h1>
          <img src={vector} alt="" />
        </div>
      </div>
    );
  }
}

export default Instructor;
