import React, { Component } from "react";
import { Button } from "react-bootstrap";
import {downloadCv} from "../helper";
import "materialize-css/dist/css/materialize.min.css";

export default class About extends Component {
  render() {
    return (
      <div id="home" >
        <div className="card">
          <div className="card-content">
            <h6 className="mt-bottom center">
              <strong>ABOUT ME</strong>
            </h6>
            <p className="gray-text">
              Undergraduate in computer science with interest in web and mobile application Development.
              Excellent reputation for problem solving,excellent
              collaboration with teammates and very effective in terms of analysis and autonomy. Proficient
              in Java,c#,C++,JavaScript and Agile/Scrum methodology.
            </p>
          </div>
          <div className="card-action">
            <h6 className="center">
              <strong>PERSONAL INFO</strong>
            </h6>
            <div className="row mt">
              <div className="col xl6 l6 m6 s12">
                <p>
                  <strong>Address:</strong> Québec city / Canada
                </p>
                <p>
                  {/*<strong>Email:</strong>*/}
                  {/*<a href="mailto:johnchafi@gmail.com"> johnchafi@gmail.com</a>*/}
                  <strong>Email:</strong> johnchafi@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +15815782309
                </p>
              </div>
              <div className="col xl6 l6 m6 s12">
                <p>
                  <strong>Main Language</strong> - French
                </p>
                <p>
                  <strong>Second Language</strong> - English
                </p>
                <p>
                  <pre>
                    <a
                      className="fab fa-linkedin grey-text text-darken-4 social_style"
                      href="https://www.linkedin.com/in/uwimana-jean-de-dieu-779418122/"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      className="fab fa-github grey-text text-darken-4 social_style"
                      href="https://github.com/johnchafi"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </pre>
                </p>
              </div>
              <div className="center">
                  <Button className="btn-floating red lighten-1  pulse" onClick={(e)=>downloadCv(e)}>
                    <i className="fas fa-download" />
                  </Button>
                  <p className="red-text">Download CV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
