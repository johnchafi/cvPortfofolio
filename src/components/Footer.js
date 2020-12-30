import React, { Component } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import "../index.css";

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="section light-blue darken-4 white-text center">
                    <div className="row">
                        <div className="col s12">
                            <h4>Follow Me</h4>
                            <p>Check out on social media for more details </p>
                            <pre>
                            <a
                            className="fab fa-linkedin fa-3x white-text"
                            href="https://www.linkedin.com/in/uwimana-jean-de-dieu-779418122/"
                            target="_blank"
                            rel="noopener noreferrer"
                             ></a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a
                                    className="fab fa-github fa-3x white-text"
                                    href="https://github.com/johnchafi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ></a>

                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a
                                    className="fab fa-instagram fa-3x white-text"
                                    href="https://www.instagram.com/johnchafi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ></a>
                             </pre>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
