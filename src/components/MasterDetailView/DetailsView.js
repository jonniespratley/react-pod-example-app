import React from "react";
import { NameValue } from "../slds/index";

class DetailsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  render() {
    return this.props.selected.length ? (
      this.props.selected.map(item => (
        <dl key={item.id}>
          <NameValue label="Name" value={item.label} />
          <NameValue label="Name" value={item.label} />
        </dl>
      ))
    ) : (
      <div />
    );
  }
}

export default DetailsView;
