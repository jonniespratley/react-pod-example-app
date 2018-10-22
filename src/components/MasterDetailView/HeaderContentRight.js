import React from "react";
import { Button, Dropdown } from "@salesforce/design-system-react";

const defaultOptions = [
  { label: "Display As", type: "header" },
  {
    label: "Table View",
    value: "A0",
    rightIcon: {
      category: "utility",
      name: "table"
    }
  },
  {
    label: "List View",
    value: "B0",
    rightIcon: {
      category: "utility",
      name: "side_list"
    }
  }
];
const HeaderContentRight = ({ icon, options = defaultOptions, onSelect }) => (
  <div>
    <Dropdown
      id="header-right-refresh"
      buttonClassName="slds-m-right_xx-small"
      assistiveText={{ icon: "Checkmark with right icon" }}
      buttonVariant="icon"
      checkmark
      iconCategory="utility"
      iconName="side_list"
      iconSize="large"
      iconVariant="more"
      align="right"
      onSelect={onSelect}
      options={options}
      value="B0"
    />

    <Button
      assistiveText={{ icon: "Refresh" }}
      iconCategory="utility"
      iconName="refresh"
      iconVariant="border"
      variant="icon"
    >
      Refresh
    </Button>
  </div>
);
export default HeaderContentRight;
