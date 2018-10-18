import React from "react";
import { dataCenter, services } from "../../mocks";

import {
  Icon,
  MediaObject,
  TabsPanel,
  Tabs,
  Card,
  PageHeader,
  Button,
  ButtonGroup
} from "@salesforce/design-system-react";

import ConfigDataTable from "./ConfigDataTable";
import ServicesList from "./ServicesList";

const trail = [<a href="/#/data-centers">Data Centers</a>];

const navRight = () => <div>Nav</div>;
const contentRight = () => <div>contentRight</div>;

class DataCenterDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="u-p">
        <PageHeader
          title={this.props.dataCenter.name}
          navRight={navRight}
          contentRight={contentRight}
          variant="recordHome"
          truncate
          details={this.props.dataCenter.details}
          trail={trail}
          info={`${this.props.dataCenter.url}`}
        />
        <br />

        <div class="slds-grid slds-gutters">
          <div class="slds-col slds-size_12-of-12">
            <Card
              heading="Configuration"
              icon={<Icon category="standard" name="account" size="small" />}
            >
              <Tabs id="tabs-example-default">
                <TabsPanel label="OS">
                  <ConfigDataTable config={this.props.dataCenter.config} />
                </TabsPanel>
                <TabsPanel label="App">
                  <ConfigDataTable config={this.props.dataCenter.config} />
                </TabsPanel>
                <TabsPanel label="Hardware">
                  <ConfigDataTable config={this.props.dataCenter.config} />
                </TabsPanel>
                <TabsPanel label="Firmware">
                  <ConfigDataTable config={this.props.dataCenter.config} />
                </TabsPanel>
              </Tabs>
            </Card>
            <Card
              heading="Services"
              icon={<Icon category="standard" name="account" size="small" />}
            >
              <ServicesList services={services} />
            </Card>

            <Card
              heading="Pods"
              icon={<Icon category="standard" name="account" size="small" />}
            />
            {dataCenter.pods.map(pod => {
              return (
                <Card
                  icon={<Icon category="standard" name="user" size="small" />}
                  heading={pod.name}
                  key={pod.name}
                >
                  {pod.children &&
                    pod.children.map(cluster => <div>{cluster.name}</div>)}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
DataCenterDetails.defaultProps = {
  dataCenter: {
    name: "data-center-1"
  }
};
export default DataCenterDetails;
