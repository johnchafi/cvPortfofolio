import React, { Component } from "react";
import { Link } from "react-scroll";
import { HashLink as Link2 } from 'react-router-hash-link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
          <div className="navbar-fixed">
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
                      <AnchorLink href='#home'>
                        <i className='fas fa-copy'></i> Home
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href='#skills'>
                        <i className='fas fa-copy'></i> Skills
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href='#experience'>
                        <i className='fas fa-id-badge'></i> Experiences
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href='#education'>
                        <i className='fas fa-graduation-cap'></i> Educations
                      </AnchorLink>
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
          </div>
          <ul className='sidenav' id='side-nav'>
            <li>
              <AnchorLink href='#home'>
                <i className='fas fa-copy'></i> Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href='#skills'>
                <i class='fas fa-copy'></i> Skills
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href='#experience'>
                <i class='fas fa-id-badge'></i> Experiences
              </AnchorLink>
            </li>
            <li>
              {/*<Link to='education'>*/}
              {/*  <i class='fas fa-graduation-cap'></i> Educations*/}
              {/*</Link>*/}
              <AnchorLink href='#education'>
                <i class='fas fa-graduation-cap'></i> Educations
              </AnchorLink>
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
