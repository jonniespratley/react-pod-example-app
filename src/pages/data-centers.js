import React from "react";
import { Route, Link } from "react-router-dom";
import { Breadcrumb } from "@salesforce/design-system-react";

import Details from "./details";
import { dataCenters } from "../mocks";
import DataCentersView from "../components/DataCentersView";

export default class DataCentersPage extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = e => {
    window.location.hash = `#/data-centers/${e.id}`;
  };
  render() {
    const { match } = this.props;
    const trail = [
      <a id="parent-entity" href="/#/data-centers">
        Data Centers
      </a>
    ];

    return (
      <div>
        {/* Render Data Center Details */}
        <Route path={`${match.url}/:id`} component={Details} />
        <Route
          exact
          path={match.url}
          render={() => (
            <div>
              <DataCentersView
                onClick={this.handleClick}
                dataCenters={dataCenters}
              />
            </div>
          )}
        />
      </div>
    );
  }
}
