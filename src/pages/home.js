import React from "react";
import { Button, Card } from "@salesforce/design-system-react";
import WorldMap from "../components/WorldMap/index";
import Path, { PathItem } from "../components/slds/Path";
import { SummaryDetail, ListItem, Grid, Col } from "../components/slds";

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

const mockItems = new Array(5).fill({ label: "Item" });

const List = ({ items }) =>
  items.map(item => <ListItem {...item} key={item.label} />);

const Page = () => (
  <div className="u-p">
    Context Browser
    <Path paths={steps} gutters />
    <Grid gutters>
      {steps.map(step => (
        <Col size="1-of-4" key={step.title}>
          <List items={mockItems} />
        </Col>
      ))}
    </Grid>
    <Path>
      <PathItem title="Test 1" complete />
      <PathItem title="Test 2" current complete />
      <PathItem title="Test 3" />
    </Path>
    <hr />
    <SummaryDetail title="SUmmary">This is detail.</SummaryDetail>
    <h3>Cards</h3>
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);

export default Page;
