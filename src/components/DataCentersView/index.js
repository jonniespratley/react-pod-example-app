import React from "react";
import WorldMap from "../WorldMap/index";
import { bubbles } from "../../mocks";
import {
  Card,
  PageHeader,
  Button,
  DataTable,
  DataTableColumn,
  DataTableCell
} from "@salesforce/design-system-react";

const CustomDataTableCell = ({ children, ...props }) => {
  const { item } = props;
  return (
    <DataTableCell {...props}>
      <a href={`/#/data-centers/${item.id}`}>{children}</a>
    </DataTableCell>
  );
};

CustomDataTableCell.displayName = DataTableCell.displayName;

const trail = [<a href="#/data-centers">Data Centers</a>];
const navRight = () => <div>Nav</div>;
const contentRight = () => <div>contentRight</div>;

class DataCentersView extends React.Component {
  handleRowChange = e => {
    console.log(e);
  };
  render() {
    const { dataCenters } = this.props;
    return (
      <div className="slds-m-horizontal_small">
        {/** 
    <PageHeader
      title={name}
      navRight={navRight}
      contentRight={contentRight}
      variant="objectHome"
      truncate
      trail={trail}
      info="6 items"
    />
    */}
        <WorldMap data={dataCenters} />
        <br />

        <div class="slds-grid slds-gutters">
          <div class="slds-col slds-size_12-of-12">
            <Card heading="All Data Centers">
              <DataTable items={dataCenters} id="dcDataTable">
                <DataTableColumn property="name" key="dc-name" label="Name">
                  <CustomDataTableCell />
                </DataTableColumn>
                <DataTableColumn
                  key="dc-region"
                  label="Region"
                  property="region"
                  truncate
                />
              </DataTable>
            </Card>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
DataCentersView.defaultProps = {
  dataCenters: []
};
export default DataCentersView;
