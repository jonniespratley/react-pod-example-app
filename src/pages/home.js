import React from "react";
import { Button, Card } from "@salesforce/design-system-react";
import WorldMap from "../components/WorldMap/index";
import MasterDetailView from "../components/MasterDetailView";
import Path, { PathItem } from "../components/slds/Path";
import { SummaryDetail, ListItem, Grid, Col } from "../components/slds";
import { dataCenter } from "../mocks";
//import Button from "@salesforce/design-system-react/components/button";
//import Card from "@salesforce/design-system-react/components/card";

//import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import Tabs from "@salesforce/design-system-react/components/tabs";
import TabsPanel from "@salesforce/design-system-react/components/tabs/panel";

const steps = [
  { title: "Step 1", complete: true },
  { title: "Step 2" },
  { title: "Step 3", active: true },
  { title: "Step 4" }
];

const listOptions = [
  {
    id: "009",
    label: "Item Label",
    bottomLeftText: "MedLife, Inc.",
    topRightText: "68",

    bottomRightText: "New"
  }
];
const mockItems = new Array(5).fill(listOptions[0]);

const List = ({ items }) =>
  items.map(item => <ListItem {...item} key={item.label} />);

const Page = () => (
  <div className="u-p">
    <MasterDetailView items={mockItems} />

    <div hidden>
      <Path paths={steps} gutters />
      <Grid gutters>
        {steps.map(step => (
          <Col size="1-of-4" key={step.title}>
            <List items={mockItems} />
          </Col>
        ))}
      </Grid>
    </div>
  </div>
);

export default Page;
