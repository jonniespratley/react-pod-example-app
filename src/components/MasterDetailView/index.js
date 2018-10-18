import React from "react";
import {
  Button,
  Card,
  SplitView,
  SplitViewHeader,
  SplitViewListbox
} from "@salesforce/design-system-react";

class MasterDetailView extends React.Component {
  constructor(props) {
    super(props);
  }
  masterView = () => {
    return <div>Master</div>;
  };
  detailView = () => {
    return <div>Details</div>;
  };
  render() {
    return (
      <div style={{ height: "90vh" }}>
        <SplitView
          id="base-example"
          isOpen={this.props.isOpen}
          master={this.masterView()}
          detail={this.detailView()}
        />
      </div>
    );
  }
}
export default MasterDetailView;
