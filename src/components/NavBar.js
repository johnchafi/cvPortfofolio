import React, { Component } from "react";
import { Link } from "react-scroll";
import { HashLink as Link2 } from 'react-router-hash-link';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

export default class Navbar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250,
    });
  }
  render() {
    return (
        <>
          <nav className='light-blue darken-4'>
            <div className='container'>
              <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                  JEAN DE DIEU
                </Link>
                <Link to='/' data-target='side-nav' className='sidenav-trigger'>
                  <i className='material-icons'>menu</i>
                </Link>
                <ul className='right hide-on-med-and-down'>
                  <li>
                    <Link to='/'>
                      <i class='fas fa-home'></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link to='skills'>
                      <i class='fas fa-copy'></i> Skills
                    </Link>
                  </li>
                  <li>
                    <Link to='experience'>
                      <i class='fas fa-id-badge'></i> Experiences
                    </Link>
                  </li>
                  <li>
                    <Link to='education'>
                      <i class='fas fa-graduation-cap'></i> Educations
                    </Link>
                  </li>
                  <li>
                    <Link2 to='portofolio' target="_blank">
                      <i class='fas fa-address-card'></i> Portfolios
                    </Link2>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <ul className='sidenav' id='side-nav'>
            <li>
              <Link to='/'>
                <i class='fas fa-home'></i> Home
              </Link>
            </li>
            <li>
              <Link to='skills'>
                <i class='fas fa-copy'></i> Skills
              </Link>
            </li>
            <li>
              <Link to='experience'>
                <i class='fas fa-id-badge'></i> Experiences
              </Link>
            </li>
            <li>
              <Link to='education'>
                <i class='fas fa-graduation-cap'></i> Educations
              </Link>
            </li>
            <li>
              <Link2 to='portofolio' target="_blank">
                <i class='fas fa-address-card'></i> Portfolios
              </Link2>
            </li>
          </ul>
        </>
    );
  }
}
