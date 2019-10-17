import React, { Component } from "react";
import StepWizard from "react-step-wizard";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default class Multistep extends Component {
  render() {
    return (
      <StepWizard>
        <Step1 />
        <Step2 />
        <Step3 />
      </StepWizard>
    );
  }
}
