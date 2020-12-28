import React, { Component } from "react";
import pythonbrain from "../learnero/pythonbrain.jpg";
import music from "../learnero/music6.jpg";
import octopus from "../learnero/octopus.jpeg";
import legs from "../learnero/legs.jpeg";
import console from "../learnero/console.jpeg";
import webcoding from "../learnero/webcoding.jpeg";

export class RecentCourses extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(17, 17, 17)", padding: "50px 0" }}>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "2.2em",
            padding: " 0 0 50px 0",
          }}
        >
          Recent Courses
        </h1>
        <div className="buttons">
          <button className="focus">All Categories</button>
          <button>Development</button>
          <button>Exercise</button>
          <button>Material Design</button>
          <button>Music</button>
          <button>Photography</button>
          <button>Software Development</button>
          <button>temporary</button>
        </div>
        <div className="availableCourses">
          <div style={{ backgroundColor: "white", margin: "20px 0" }}>
            <img src={pythonbrain} alt="course" />
            <p style={{ color: "grey", padding: "0 10px" }}>Data Science </p>
            <p
              style={{
                fontWeight: "bold",
                padding: "20px 10px",
                borderBottom: "1px solid grey",
              }}
            >
              Python for Data Science and Machine Learning Bootcamp{" "}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "0 10px",
                height: "50px",
                alignItems: "center",
              }}
            >
              125
            </div>
          </div>
          <div style={{ backgroundColor: "white", margin: "20px 0" }}>
            <img src={webcoding} alt="course" />
            <p style={{ color: "grey", padding: "0 10px" }}>Apache </p>
            <p
              style={{
                fontWeight: "bold",
                padding: "20px 10px",
                borderBottom: "1px solid grey",
              }}
            >
              Web coding and Apache Basics
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "0 10px",
                height: "50px",
                alignItems: "center",
              }}
            ></div>
          </div>
          <div style={{ backgroundColor: "white", margin: "20px 0" }}>
            <img src={music} alt="course" />
            <p style={{ color: "grey", padding: "0 10px" }}> </p>
            <p
              style={{
                fontWeight: "bold",
                padding: "20px 10px",
                borderBottom: "1px solid grey",
              }}
            >
              Testing
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "0 10px",
                height: "50px",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              Free
            </div>
          </div>
          <div style={{ backgroundColor: "white", margin: "20px 0" }}>
            <img src={octopus} alt="course" />
            <p style={{ color: "grey", padding: "0 10px" }}> </p>
            <p
              style={{
                fontWeight: "bold",
                padding: "20px 10px",
                borderBottom: "1px solid grey",
              }}
            >
              Learnero
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "0 10px",
                height: "50px",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              Free
            </div>
          </div>
          <div style={{ backgroundColor: "white", margin: "20px 0" }}>
            <img src={legs} alt="course" />
            <p style={{ color: "grey", padding: "0 10px" }}>C++ </p>
            <p
              style={{
                fontWeight: "bold",
                padding: "20px 10px",
                borderBottom: "1px solid grey",
              }}
            >
              Engine Creating for Xbox One X
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "0 10px",
                height: "50px",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              $80
            </div>
          </div>
          <div style={{ backgroundColor: "white", margin: "20px 0" }}>
            <img src={console} alt="course" />
            <p style={{ color: "grey", padding: "0 10px" }}>
              Software Development
            </p>
            <p
              style={{
                fontWeight: "bold",
                padding: "20px 10px",
                borderBottom: "1px solid grey",
              }}
            >
              Console Development Basics withUnity
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "0 10px",
                height: "50px",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              $68
            </div>
          </div>
          <button
            style={{
              color: "white",
              display: "block",
              margin: "0 auto",
              padding: "20px ",
              backgroundColor: "purple",
              border: "none",
              outline: "none",
              width: "150px",
              fontSize: "1.2em",
              borderRadius: "30px",
              margin: "50px auto",
            }}
          >
            show all
          </button>
        </div>
      </div>
    );
  }
}

export default RecentCourses;
