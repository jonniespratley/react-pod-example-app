import React from "react";
import { Grid, Col, ListItem } from "../slds/index";
import { Icon, Card } from "@salesforce/design-system-react";

export default ({
  steps,
  dataCenter,
  handleClusterSelect,
  handleNodeSelect,
  handlePathClick,
  handlePodSelect,
  selectedPod,
  selectedCluster
}) => (
  <div>
    <Path paths={steps} actionLabel="Compare" onClick={handlePathClick} />
    <Grid>
      {/* pods */}
      <Col size="1-of-3">
        {dataCenter.pods.map(pod => (
          <ListItem
            label={pod.name}
            selected={pod.selected}
            onClick={e => handlePodSelect(e, pod)}
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
              onClick={e => handleClusterSelect(e, cluster)}
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
              onClick={e => handleNodeSelect(e, n)}
            />
          ))}
      </Col>
    </Grid>
  </div>
);
