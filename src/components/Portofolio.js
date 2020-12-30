import React, {Component} from 'react';
import ImgProfile from "../images/safaris.png";
import ImgUbeat from "../images/ubeat.png";
import popularImage from "../images/popularFilm.png";
import "../index.css";
import Search from "./Search";
import Footer from "./Footer";

export default class Portofolio extends Component{
    render(){
        return (
           <section id="portofolio" className="background light-blue">
               <Search></Search>
               <div className="container">
                   <div className="row">
                       <div className="col s12">
                           <div className="card light-blue darken-4">
                               <div className="card-content white-text">
                                   <span className="card-title center">About Portofolios</span>
                                   <p>These are the examples of front-end projects. Throughout my school career, i have
                                       worked on a lot of projects which didn't have user interface.
                                       Many more projects are still undergoing.
                                       For more info check my CV or Github.
                                   </p>
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
                                       src={ImgProfile} alt="safaris"/>
                               </div>
                               <div className="card-content">
                                   <p>This is a clone of Airbnb. I realise this page with react js and materialize.</p>
                               </div>
                               <div className="card-action center z-depth-2">
                                   <a className="light-blue-text text-darken-4" href="https://safaris.netlify.app">View</a>
                               </div>
                           </div>
                       </div>
                       <div className="col s12 m6">
                           <div className="card medium">
                               <div className="card-image taille">
                                   <img
                                       className="responsive-img"
                                       src={ImgUbeat} alt="ubeat"/>
                               </div>
                               <div className="card-content">
                                   <p>This project is a clone of spotify,you can listen , like and  share songs and many more
                                       functionnalities. Tools used: vuetify, vuejs, APIs.</p>
                               </div>
                               <div className="card-action center z-depth-2">
                                   <a className="light-blue-text text-darken-4" href="https://github.com/johnchafi/ubeat">View</a>
                               </div>
                           </div>
                       </div>
                       <div className="col s12 m6">
                           <div className="card medium">
                               <div className="card-image taille">
                                   <img
                                       className="responsive-img"
                                       src={popularImage}  alt="movie"/>
                               </div>
                               <div className="card-content">
                                   <p>This project is a clone of movie streamer's websites ,you can search a movie,
                                       view diffrents caracteristics like actors , time , cost and many more
                                       functionnalities. Tools used: react js, APIs.</p>
                               </div>
                               <div className="card-action center z-depth-2">
                                   <a className="light-blue-text text-darken-4" href="https://moviejohn.netlify.app">View</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <Footer></Footer>
           </section>
        );
    }

}
