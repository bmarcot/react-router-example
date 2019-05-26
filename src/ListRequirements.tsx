import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListRequirements extends Component {
  render() {
    return (
      <div>
        <h2>ListRequirements</h2>
        <ul>
          {[1, 2, 3, 4, 5].map(number => (
            <li key={number}>
              <Link to={`/requirements/${number}`}>{"RQ-" + number}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListRequirements;
