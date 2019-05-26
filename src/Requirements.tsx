import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import RequirementDetails from "./RequirementDetails";

class Requirements extends Component<RouteComponentProps, {}> {
  render() {
    return (
      <div>
        <h2>Requirements</h2>
        <ul>
          {[1, 2, 3, 4, 5].map(id => (
            <li key={id}>
              <Link to={`${this.props.match.url}/${id}`}>{"RQ-" + id}</Link>
            </li>
          ))}
        </ul>
        <hr />
        <Route
          path={`${this.props.match.path}/:reqId`}
          component={RequirementDetails}
        />
      </div>
    );
  }
}

export default Requirements;
