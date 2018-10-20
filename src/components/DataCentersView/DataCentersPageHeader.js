import React from "react";
import {
  Card,
  Button,
  ButtonGroup,
  PageHeader,
  IconSettings,
  Icon
} from "@salesforce/design-system-react";

export default ({
  dataCenter,
  onMapClick,
  onTableClick,
  title = "Map View"
}) => {
  const navRight = <div className="slds-button-group" role="group" />;
  const contentRight = (
    <div>
      <ButtonGroup>
        <Button
          iconCategory="action"
          iconName="map"
          variant="icon"
          iconVariant="border"
          onClick={onMapClick}
          className="slds-m-left--xx-small"
          assistiveText={{ icon: "Map View" }}
        />
        <Button
          iconCategory="utility"
          iconName="table"
          variant="icon"
          iconVariant="border"
          onClick={onTableClick}
          className="slds-m-left--xx-small"
          assistiveText={{ icon: "Table View" }}
        />
      </ButtonGroup>
    </div>
  );

  const trail = [<a href="javascript:void(0);">Data Centers</a>];

  return (
    <IconSettings iconPath="/assets/icons">
      <PageHeader
        title={title}
        navRight={navRight}
        contentRight={contentRight}
        variant="objectHome"
        truncate
        trail={trail}
        info="10 items"
      />
    </IconSettings>
  );
};
