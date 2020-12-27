import React, {Component} from 'react';
import NavBar from "./NavBar";
import ImgProfile from "../images/safaris.png";
import ImgUbeat from "../images/ubeat.png";
import "../index.css";

export default class Portofolio extends Component{
    render(){
        return (
           <section>
               <NavBar></NavBar>
               <div className="container">
                   <div className="row">
                       <div className="col s12">
                           <div className="card light-blue darken-4">
                               <div className="card-content white-text">
                                   <span className="card-title center">Card Title</span>
                                   <p>Those are the exemples of front-end projects. Throughout my school career i have
                                       worked on a lot of projects wich don't have interfaces.
                                       Many more projects still undergoing.
                                       For more info check my CV or Github.
                                   </p>
                               </div>
                               <div className="card-action center">
                                   <a href="https://safaris.netlify.app">View</a>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col s12 m6">
                           <div className="card medium">
                               <div className="card-image taille">
                                   <img
                                       className=" responsive-img"
                                       src={ImgProfile} />
                               </div>
                               <div className="card-content">
                                   <p>This is a clone of Airbnb. I realise this page with react js and materialize</p>
                               </div>
                               <div className="card-action center">
                                   <a href="https://safaris.netlify.app">View</a>
                               </div>
                           </div>
                       </div>
                       <div className="col s12 m6">
                           <div className="card medium">
                               <div className="card-image taille">
                                   <img
                                       className="responsive-img"
                                       src={ImgUbeat} />
                               </div>
                               <div className="card-content">
                                   <p>This project is a clone of spotify,you can listen , like and  share songs and many more
                                       functionnalities. Tools used: vuetify, vuejs, APIs</p>
                               </div>
                               <div className="card-action center">
                                   <a href="https://github.com/johnchafi/ubeat">View</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

        );
    }

}
