import React from "react";
import {
  MediaObject,
  Icon,
  SplitViewListbox
} from "@salesforce/design-system-react";

const listOptions = [
  {
    label: "Item Label",
    bottomLeftText: null,
    topRightText: null,
    bottomRightText: null
  },
  {
    label: "Item Label",
    bottomLeftText: null,
    topRightText: null,
    bottomRightText: null
  }
];

export default ({
  heading,
  selected = [],
  items = listOptions,
  icon,
  onSort,
  onSelect = () => {}
}) => {
  return (
    <div>
      <h4>{heading}</h4>
      <SplitViewListbox
        key="podsList"
        selection={selected}
        options={listOptions}
        events={{
          onSort,
          onSelect
        }}
      />
    </div>
  );
};
