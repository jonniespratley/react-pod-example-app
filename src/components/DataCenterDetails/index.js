import React from "react";
import { dataCenter, services } from "../../mocks";
import { SummaryDetail, NameValuePair } from "../slds";
import Path, { PathItem } from "../slds/Path";
import {
  Icon,
  SplitViewListbox,
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

const listOptions = [
  {
    id: "009",
    label: "Sarah Loehr",
    topRightText: "68",
    bottomLeftText: "MedLife, Inc.",
    bottomRightText: "New"
  }
];

const ListItem = ({ label, selected, children, onClick }) => (
  <div
    className={`list-item ${selected ? "list-item--selected" : null}`}
    onClick={onClick}
  >
    <span>{label}</span>
    {children}
  </div>
);

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
    this.state = {
      dataCenter: props.dataCenter || null,
      selected: [listOptions[listOptions.length - 2]],
      selectedPod: null,
      selectedCluster: null,
      selectedNodes: null,
      unread: []
    };
  }

  clearSelectedNodes = () => {
    const { selectedPod } = this.state;
    selectedPod.children.forEach(p => (p.selected = false));
  };

  handleSelect = (event, { selectedItems, item }) => {
    console.log(selectedItems, item);
  };

  handleNodeSelect = (event, node) => {
    console.log(node);
  };

  handlePodSelect = (event, pod) => {
    const { dataCenter } = this.state;
    dataCenter.pods.forEach(p => (p.selected = false));
    console.log(pod);
    pod.selected = !pod.selected;
    this.setState({ selectedPod: pod, selectedCluster: null });
  };

  handleClusterSelect = (event, cluster) => {
    const { selectedPod } = this.state;
    selectedPod.children.forEach(p => (p.selected = false));
    cluster.selected = !cluster.selected;
    this.setState({ selectedPod, selectedCluster: cluster });
  };

  renderPods = pods => {
    /**
     *
     * Structure should be
     * | Pods | Clusters | Nodes
     */
    return pods.map(pod => (
      <div className="slds-col slds-small-size_12-of-12">
        <ListItem pod={pod}>
          <ul className="slds-m-left_large">
            {pod.children && this.renderPods(pod.children)}
          </ul>
        </ListItem>
      </div>
    ));
  };

  render() {
    const { selectedPod, selectedCluster, dataCenter } = this.state;
    return (
      <div className="u-p">
        <PageHeader
          title={dataCenter.name}
          navRight={navRight}
          contentRight={contentRight}
          variant="recordHome"
          truncate
          icon={<Icon category="standard" name="account" size="large" />}
          details={dataCenter.details}
          trail={trail}
          info={`${dataCenter.url}`}
        />
        <br />

        <div class="slds-grid slds-gutters">
          <div class="slds-col slds-size_12-of-12">
            <Card
              heading="Services"
              icon={<Icon category="standard" name="account" size="small" />}
            >
              <ServicesList services={services} />
            </Card>

            <Card heading="Pods">
              <div className="slds-grid">
                <div className="slds-col">
                  <h2>Pods</h2>
                  {dataCenter.pods.map(pod => (
                    <ListItem
                      label={pod.name}
                      selected={pod.selected}
                      onClick={e => this.handlePodSelect(e, pod)}
                    />
                  ))}
                </div>
                <div className="slds-col">
                  <h2>Clusters</h2>

                  {selectedPod &&
                    selectedPod.children.map(cluster => (
                      <ListItem
                        label={cluster.name}
                        selected={cluster.selected}
                        onClick={e => this.handleClusterSelect(e, cluster)}
                      />
                    ))}
                </div>
                <div className="slds-col">
                  <h2>Nodes</h2>
                  {selectedCluster &&
                    selectedCluster.children.map(n => (
                      <ListItem
                        label={n.name}
                        selected={n.selected}
                        onClick={e => this.handleNodeSelect(e, n)}
                      />
                    ))}
                </div>
              </div>
            </Card>

            {/**
            <div className="slds-grid">
              <div className="slds-col">
                <SplitViewListbox
                  key="2"
                  labels={{
                    header: "Pods"
                  }}
                  options={listOptions}
                  events={{
                    onSelect: this.handleSelect
                  }}
                  selection={this.state.selected}
                />
              </div>

            </div>
             */}
          </div>
        </div>
      </div>
    );
  }
}
DataCenterDetails.defaultProps = {
  dataCenter: {
    name: "data-center-1",
    pods: []
  }
};
export default DataCenterDetails;
