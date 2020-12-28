import React, { Component } from "react";
import studytips from "../learnero/studytips.jpg";
import technology from "../learnero/technology.jpeg";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <h3>About</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            tempore accusantium illum perspiciatis quo eveniet velit dolor quam,
            labore voluptatem placeat. Nostrum iste at id modi ullam molestias
            veniam esse sit laboriosam magnam cum vitae et mollitia dolorem,
            maxime dolore.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>learnerit@gmail.com</p>
          <p>support@learnero.co</p>
          <p>instructord@learnero.co</p>
          <p>careers@learnero.co</p>
        </div>
        <div>
          <h3>Quick links</h3>
          <ul>
            <li>Courses</li>
            <li>About Us</li>
            <li>Meet the Team</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3>Blog</h3>
          <div className="flex">
            <img src={studytips} alt="study tips" />
            <p>learnero's top 5 study tips</p>
            <p>-November 2,2020</p>
          </div>
          <div className="flex">
            <img src={technology} alt="study tips" />
            <p>Technology: the past vs the present</p>
            <p>-October 29,2020</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
