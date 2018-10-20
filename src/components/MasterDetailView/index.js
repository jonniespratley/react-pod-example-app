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

  handleSelect = (event, { selectedItems, item }) => {
    console.log(selectedItems, item);
  };
  masterView = () => {
    const { items, labels, key, selected } = this.props;
    return (
      <div>
        <SplitViewListbox
          key={key}
          selection={selected}
          labels={labels}
          options={items}
          events={{
            onSelect: this.handleSelect
          }}
        />
      </div>
    );
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
MasterDetailView.defaultProps = {
  key: "2",
  items: [],
  selected: [],
  selection: [],
  onSelect: null,
  labels: {
    header: "Header"
  }
};
export default MasterDetailView;
