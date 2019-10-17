import React, { Component } from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Step1 extends Component {
  state = {
    vechile_no: "",
    model: "",
    loading: false
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleBlur = e => {
    this.setState({
      ...this.state,
      loading: true
    });
    setTimeout(() => {
      this.setState({
        ...this.state,
        loading: false
      });
      this.props.goToStep(2);
    }, 5000);
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
          <div
            style={{
              position: "fixed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: 0,
              left: 0,
              zIndex: 9999,
              width: "100%",
              height: "100%",
              background: "white"
            }}
          >
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <div>
            <h1>Vehicle Detail</h1>
            <hr></hr>
            <div className="form-group">
              <label>Vechile Number</label>
              <input
                type="text"
                name="vechile_no"
                value={this.state.vehicle_no}
                onChange={this.handleChange}
                className="form-control"
                onBlur={this.handleBlur}
              />
            </div>
            <div className="form-group">
              <label>Modal Name</label>
              <input
                type="text"
                value={this.state.model}
                className="form-control"
                name="model"
                onChange={this.handleChange}
              />
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
        )}
      </div>
    );
  }
}
