import React from "react";
import { Button, Card } from "@salesforce/design-system-react";
import WorldMap from "../components/WorldMap/index";
import Path, { PathItem } from "../components/slds/Path";
import { SummaryDetail } from "../components/slds";

//import Button from "@salesforce/design-system-react/components/button";
//import Card from "@salesforce/design-system-react/components/card";

//import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import Tabs from "@salesforce/design-system-react/components/tabs";
import TabsPanel from "@salesforce/design-system-react/components/tabs/panel";

const steps = [{ title: "Step 1" }];
const Page = () => (
  <div className="u-p">
    <Path paths={steps} />

    <hr />
    <Path>
      <PathItem title="Test" />
      <PathItem title="Test" />
      <PathItem title="Test" />
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
