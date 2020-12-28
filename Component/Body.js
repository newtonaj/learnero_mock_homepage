import React, { Component } from "react";
import Vector18 from "../learnero/Vector18.png";
import anytime from "../learnero/Anytime.png";
import experienced from "../learnero/Exp-teachers.png";
import student from "../learnero/Stdt-forms.png";
import unlimited from "../learnero/Unlimt-accesss.png";

import art from "../learnero/art.jpeg";
import exercise from "../learnero/exercise.jpg";
import materialdesign from "../learnero/materialdesign.jpg";
import guitar from "../learnero/guitar.jpeg";
import photography from "../learnero/photography.jpg";
import softwaredev from "../learnero/softwaredev.jpg";
import RecentCourses from "./RecentCourses";
import Instructor from "./Instructor";
import Pricing from "./Pricing";

export class Body extends Component {
  render() {
    return (
      <main>
        <div className="vector18">
          <p>
            Offering a blend of prereccorded and live classes with our
            professional teachers to ensure you get access to top-quality
            teaching
          </p>
          <img src={Vector18} alt="" />
        </div>
        <div>
          <div className="box">
            <div className="courses art">
              <img src={art} alt="art" />
              <span className="course">Art</span>
              <span className="course-count">0 courses</span>
            </div>
            <div className="box2">
              <div className="courses">
                <img src={exercise} alt="exercise" />
                <span className="course">Exercise</span>
                <span className="course-count">4 courses</span>
              </div>
              <div className="courses">
                <img src={materialdesign} alt="materialdesign" />
                <span className="course">Material Design</span>
                <span className="course-count">3 courses</span>
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="courses">
              <img src={guitar} alt="guitar" />
              <span className="course">Music</span>
              <span className="course-count">3 courses</span>
            </div>
            <div className="courses">
              <img src={photography} alt="photography" />
              <span className="course">Photography</span>
              <span className="course-count">3 courses</span>
            </div>
            <div className="courses">
              <img src={softwaredev} alt="" />
              <span className="course">Software Development</span>
              <span className="course-count">2 courses</span>
            </div>
          </div>
        </div>
        <RecentCourses />
        <div className="section">
          <img src={unlimited} alt="unlimited access" />
          <img src={anytime} alt="anytime" />
          <img src={experienced} alt="experienced teachers" />
          <img src={student} alt="student forums" />
        </div>
        <Pricing />
        <Instructor />
      </main>
    );
  }
}

export default Body;
