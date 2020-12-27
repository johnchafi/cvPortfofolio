import React, { Component } from "react";
import { Link } from "react-scroll";
import { HashLink as Link2 } from 'react-router-hash-link';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

export default class Navbar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250,
    });
  }
  render() {
    return (
      <>
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                Jean de Dieu Uwimana
              </Link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">
                    <i className="fas fa-home"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="skills">
                    <i className="fas fa-copy"></i> Skills
                  </Link>
                </li>
                <li>
                  <Link to="experience">
                    <i className="fas fa-id-badge"></i> Experiences
                  </Link>
                </li>
                <li>
                  <Link to="education">
                    <i className="fas fa-graduation-cap"></i> Educations
                  </Link>
                </li>

                <li>
                  <Link2 to="portofolio" target="_blank">
                    <i className="fas fa-address-card"></i> Portofolio
                  </Link2>
                </li>
                {/* <li>*/}
                {/*  <Link to="downloadCv">*/}
                {/*    <i className="fas fa-copy"></i>*/}
                {/*    Download My CV*/}
                {/*  </Link>*/}
                {/*</li>*/}
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sticky-nav sidenav sidenav-close" id="side-nav">
          <li />
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="skills">
              <i className="fas fa-copy"></i> Skills
            </Link>
          </li>
          <li>
            <Link to="experience">
              <i className="fas fa-id-badge"></i> Experience
            </Link>
          </li>
          <li>
            <Link to="education">
              <i className="fas fa-graduation-cap"></i> Education
            </Link>
          </li>
          <li>
            <Link2 to="portofolio">
              <i className="fas fa-address-card"></i> Portofolio
            </Link2>
          </li>
          {/* <li>*/}
          {/*  <Link to="downloadCv">*/}
          {/*    <i className="fas fa-graduation-cap"></i> Download My CV*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
      </>
    );
  }
}
