import React, { Component } from "react";

export default class Step3 extends Component {
  render() {
    return (
      <div>
        <h1>Book Now</h1>
        <hr></hr>
        <div className="form-group">
          <label>Vechile Number</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Modal Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="d-flex">
          <p>
            <button onClick={this.props.previousStep}>Previous Step</button>
          </p>
          <p className="ml-2">
            <button onClick={this.props.nextStep}>Next Step</button>
          </p>
        </div>
      </div>
    );
  }
}
