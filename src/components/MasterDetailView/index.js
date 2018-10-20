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
    if (this.props.onSelect) {
      this.props.onSelect({ selectedItems, item });
    }
    console.log(selectedItems, item);
  };
  handleSort = event => {
    if (this.props.onSort) {
      this.props.onSort(event);
    }
    console.log("handleSort", event);
  };
  masterView = () => {
    const { items, labels, key, selected, listItem } = this.props;
    return (
      <div>
        <SplitViewListbox
          key={key}
          listItem={listItem}
          selection={selected}
          multiple={this.props.multiple}
          labels={labels}
          options={items}
          events={{
            onSelect: this.handleSelect,
            onSort: this.handleSort
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
  multiple: false,
  items: [],
  selected: [],
  selection: [],
  onSelect: null,
  labels: {
    header: "Header"
  }
};
export default MasterDetailView;
