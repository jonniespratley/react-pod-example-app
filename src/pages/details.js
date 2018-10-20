import React from "react";
import { Breadcrumb } from "@salesforce/design-system-react";
import { dataCenters } from "../mocks";
import Tree from "../components/Tree/index";
import DataCenterDetails from "../components/DataCenterDetails/index";
const trail = [<a href="/#/data-centers">Data Centers</a>];

export default ({ match }) => {
  const ds = dataCenters.filter(ds => ds.id === match.params.id)[0];
  return (
    <div className="slds-m-around_small">
      <DataCenterDetails dataCenter={ds} match={match} />
      <pre>{JSON.stringify(ds, null, 2)}</pre>
    </div>
  );
};
