import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

export default class Search extends Component {

    render() {
        return (
            <>
                <nav className="light-blue darken-4">
                    <div className=" container nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input  id="search" type="search" required />
                                    <label className="label-icon" htmlFor="search">
                                        <i className="material-icons">search</i>
                                    </label>
                                    <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
            </>
        );
    }
}
