import React from "react";
import { Icon, TabsPanel, Tabs, Card } from "@salesforce/design-system-react";
import ConfigDataTable from "./ConfigDataTable";
export default ({ heading = "Configuration", config }) => (
  <Card
    heading={heading}
    icon={<Icon category="standard" name="account" size="small" />}
  >
    <Tabs id="tabs-example-default">
      <TabsPanel label="OS">
        <ConfigDataTable config={config} />
      </TabsPanel>
      <TabsPanel label="App">
        <ConfigDataTable config={config} />
      </TabsPanel>
      <TabsPanel label="Hardware">
        <ConfigDataTable config={config} />
      </TabsPanel>
      <TabsPanel label="Firmware">
        <ConfigDataTable config={config} />
      </TabsPanel>
    </Tabs>
  </Card>
);
