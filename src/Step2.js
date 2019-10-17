import React, { Component } from "react";

export default class Step2 extends Component {
  render() {
    return (
      <div>
        <h1>Customer Details</h1>
        <hr></hr>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email</label>
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
