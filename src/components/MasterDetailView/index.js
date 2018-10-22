import React from "react";
import {
  Button,
  Card,
  SplitView,
  SplitViewHeader,
  SplitViewListbox
} from "@salesforce/design-system-react";

import HeaderContentRight from "./HeaderContentRight";
import DetailsView from "./DetailsView";

class MasterDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSelect = (event, { selectedItems, item }) => {
    if (this.props.onSelect) {
      this.props.onSelect({ selectedItems, item });
    }
  };
  handleSort = event => {
    if (this.props.onSort) {
      this.props.onSort(event);
    }
  };
  masterView = () => {
    const {
      items,
      labels,
      headerTitle,
      headerNavRight,
      headerContentRight,
      selected,
      listItem
    } = this.props;
    return (
      <div>
        <SplitViewHeader
          key="1"
          contentRight={headerContentRight}
          navRight={headerNavRight}
          iconAssistiveText="User"
          iconCategory="standard"
          iconName="lead"
          info={`${items.length} items`}
          title={headerTitle}
          truncate
          variant="objectHome"
        />
        <SplitViewListbox
          key="2"
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
    return (
      <div>
        <DetailsView selected={this.props.selected} />
      </div>
    );
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
  headerNavRight: {},
  headerContentRight: () => <HeaderContentRight />,
  headerTitle: "Master Detail",
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
