import React from "react";
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

import { dataCenter, services } from "../../mocks";
import {
  DataTable,
  List,
  SummaryDetail,
  NameValuePair,
  ListItem,
  CardPod,
  Grid,
  Col
} from "../slds";
import Path, { PathItem } from "../slds/Path";

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

const defaultSteps = [
  { id: "pods", title: "Pods" },
  { id: "clusters", title: "Clusters" },
  { id: "nodes", title: "Nodes" }
  // { title: "Config" }
];

class DataCenterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCenter: props.dataCenter || null,
      selected: [listOptions[listOptions.length - 2]],
      selectedPod: null,
      selectedCluster: null,
      selectedNodes: [],
      unread: [],
      steps: props.steps,
      trail: []
    };
  }

  clearSelected = item => {
    item.selected = false;
    if (item.children) item.children.forEach(this.clearSelected);
    return item;
  };

  clearSelectedNodes = () => {
    this.setState({ selectedNodes: [] });
  };

  clearAllSelected = () => {
    const { selectedPod, dataCenter } = this.state;
    if (dataCenter) dataCenter.pods.forEach(this.clearSelected);
    if (selectedPod) selectedPod.children.forEach(this.clearSelected);
  };

  handleSelect = (event, { selectedItems, item }) => {
    console.log(selectedItems, item);
  };

  handlePodSelect = (event, pod) => {
    console.log("handlePodSelect", pod);
    this.clearAllSelected();
    this.state.steps[0].active = true;

    console.log(pod);
    pod.selected = !pod.selected;
    this.setState({ selectedPod: pod });
  };

  handleClusterSelect = (event, cluster) => {
    console.log("handleClusterSelect", cluster);
    this.setState({ selectedCluster: null });
    cluster.selected = !cluster.selected;
    this.setState({ selectedCluster: cluster });
  };

  handleNodeSelect = (event, node) => {
    const { selectedNodes } = this.state;
    const nodes = selectedNodes || [];

    node.selected = !node.selected;

    console.log("handleNodeSelect", node, nodes.indexOf(node));
    const nodeIndex = nodes.indexOf(node);
    if (node.selected && nodeIndex === -1) {
      console.log("add to compare", node);
      nodes.concat(selectedNodes);
      // nodes = selectedNodes || [];
      nodes.push(node);
    } else {
      nodes.splice(nodeIndex, 1);
    }
    this.setState({ selectedNodes: nodes });
  };

  handlePathClick = event => {
    //event.persist();
    //event.preventDefault();
    console.log(event);
  };

  renderPods = pods => {
    /**
     *
     * Structure should be
     * | Pods | Clusters | Nodes
     */
    return pods.map(pod => (
      <ListItem pod={pod}>
        <ul className="slds-m-left_large">
          {pod.children && this.renderPods(pod.children)}
        </ul>
      </ListItem>
    ));
  };

  render() {
    const {
      match,
      selectedPod,
      selectedCluster,
      selectedNodes,
      dataCenter,
      trail,
      steps
    } = this.state;
    return (
      <div className="">
        <PageHeader
          label="Data Center"
          title={dataCenter.name}
          navRight={navRight}
          contentRight={contentRight}
          variant="objectHome"
          truncate
          icon={<Icon category="standard" name="account" />}
          _details={dataCenter.details}
          trail={trail}
          _info={`${dataCenter.url}`}
        />
        <br />

        <Grid gutters>
          <Col size="8-of-12">
            <Card heading="Pods & Clusters" />

            {/* Pods -> Clusters -> Nodes  */}

            <Path
              paths={steps}
              actionLabel="Compare"
              onClick={this.handlePathClick}
            />

            <Grid>
              {/* pods */}
              <Col size="1-of-3">
                {dataCenter.pods.map(pod => (
                  <ListItem
                    label={pod.name}
                    selected={pod.selected}
                    onClick={e => this.handlePodSelect(e, pod)}
                  />
                ))}
              </Col>

              {/* clusters */}
              <Col size="1-of-3">
                {selectedPod &&
                  selectedPod.children.map(cluster => (
                    <ListItem
                      label={cluster.name}
                      selected={cluster.selected}
                      onClick={e => this.handleClusterSelect(e, cluster)}
                    />
                  ))}
              </Col>

              {/* nodes */}
              <Col size="1-of-3">
                {selectedPod &&
                  selectedCluster &&
                  selectedCluster.children.map(n => (
                    <ListItem
                      label={n.name}
                      selected={n.selected}
                      onClick={e => this.handleNodeSelect(e, n)}
                    />
                  ))}
              </Col>
            </Grid>

            <br />
            <Card heading="Configurations" />

            <Grid gutters wrap>
              {selectedNodes &&
                selectedNodes.map(node => (
                  <Col key={node.key} size="1-of-2">
                    <CardPod {...node}>
                      <ConfigDataTable id={node.key} config={node.config} />
                    </CardPod>
                    <br />
                  </Col>
                ))}
            </Grid>

            {
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
            }
          </Col>
          <Col size="4-of-12">
            <Card heading="Details">
              <ServicesList
                heading="Services:"
                services={dataCenter.services}
              />
            </Card>
          </Col>
        </Grid>
      </div>
    );
  }
}
DataCenterDetails.defaultProps = {
  trail: null,
  steps: defaultSteps,
  dataCenter: {
    name: "data-center-1",
    pods: []
  }
};
export default DataCenterDetails;
