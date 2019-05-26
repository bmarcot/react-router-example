import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/17355#issuecomment-492373257
class RequirementDetails extends Component<
  RouteComponentProps<{ reqId?: string }>,
  {}
> {
  render() {
    return (
      <div>
        <h2>RequirementDetails: {this.props.match.params.reqId}</h2>
      </div>
    );
  }
}

export default RequirementDetails;
