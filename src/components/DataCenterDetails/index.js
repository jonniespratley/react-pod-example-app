import React from "react";
import { dataCenter, services } from "../../mocks";
import { SummaryDetail, NameValuePair } from "../slds";
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

const CardPod = ({ name, children }) => (
  <Card
    className="slds-m-left_medim"
    icon={<Icon category="standard" name="user" size="small" />}
    heading={name}
    key={name}
  >
    {children}
  </Card>
);
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
          icon={<Icon category="standard" name="account" size="large" />}
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
            <div className="slds-grid slds-wrap slds-gutters">
              {dataCenter.pods.map(pod => {
                return (
                  <div className="slds-col slds-size_4 slds-small-size_6-of-12">
                    <CardPod {...pod}>
                      <ul className="slds-m-left_large">
                        {pod.children &&
                          pod.children.map(cluster => (
                            <li>
                              <CardPod name={cluster.name} />
                            </li>
                          ))}
                      </ul>
                    </CardPod>
                  </div>
                );
              })}
            </div>
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
