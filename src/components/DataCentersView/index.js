import React from "react";
import { Grid, Col } from "../slds/index";
import WorldMap from "../WorldMap/index";
import DataCentersPageHeader from "./DataCentersPageHeader";
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
  handleMapClick = e => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    const { dataCenters, showTable, showMap = true } = this.props;
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

        <WorldMap data={dataCenters} onClick={this.handleMapClick} />

        {showTable && (
          <Grid>
            <Col>
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
            </Col>
          </Grid>
        )}
      </div>
    );
  }
}
DataCentersView.defaultProps = {
  dataCenters: [],
  onClick: null
};
export default DataCentersView;
