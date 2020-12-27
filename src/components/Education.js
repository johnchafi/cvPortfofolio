import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <div class="card">
          <div class="card-content">
            <h6 class="center">
              <strong>EDUCATION</strong>
            </h6>
            <table class="striped">
              <thead>
                <tr>
                  <th>School</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Major</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Université Laval</td>
                  <td>Sep 2017</td>
                  <td>Avril 2021</td>
                  <td>
                    Bachelor of Science: Computer science
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h6 class="center">
              <strong>CERTIFICATION AND DIPLOMA</strong>
            </h6>
            <table class="striped">
              <thead>
                <tr>
                  <th>Institution</th>
                  <th>Issue Date</th>
                  <th>Topic</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Byimana school of science</td>
                  <td>July 2012</td>
                  <td>Math physics and computer</td>
                </tr>
                <tr>
                  <td>Regis University</td>
                  <td>2016</td>
                  <td>Introduction to computer science</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
