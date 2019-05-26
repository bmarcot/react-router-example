import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ListRequirements from "./ListRequirements";
import RequirementDetails from "./RequirementDetails";

class Requirements extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/requirements" component={ListRequirements} />
        <Route path="/requirements/:reqId" component={RequirementDetails} />
      </Switch>
    );
  }
}

export default Requirements;
