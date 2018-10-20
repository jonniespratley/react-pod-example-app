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
    const { title, dataCenters, showTable = true, showMap = true } = this.props;
    return (
      <div className="slds-m-around_small">
        <PageHeader
          title={title}
          navRight={navRight}
          contentRight={contentRight}
          variant="objectHome"
          truncate
          trail={trail}
          info={`${dataCenters.length} records`}
        />
        {/** 
    
    */}

        <WorldMap data={dataCenters} onClick={this.handleMapClick} />

        {showTable && (
          <Grid>
            <Col>
              <Card heading={title}>
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
  onClick: null,
  title: "All Data Centers"
};
export default DataCentersView;
