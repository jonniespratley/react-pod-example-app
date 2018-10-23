import React from "react";
import {
  Button,
  Dropdown,
  ProgressRing
} from "@salesforce/design-system-react";

import { NameValue } from "../slds/index";

class DetailsView extends React.Component {
  static defaultProps = {
    selected: [{ label: "Test", value: "some value" }]
  };
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    };
  }
  render() {
    return this.props.selected.length ? (
      this.props.selected.map(item => (
        <dl key={item.id}>
          <NameValue label={item.label} value={item.value} />
        </dl>
      ))
    ) : (
      <div />
    );
  }
}

export default DetailsView;
