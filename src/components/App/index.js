import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import GlobalNavBar from "./GlobalNavBar";
import AppGlobalHeader from "./GlobalHeader";
import {
  IconSettings,
  GlobalHeader,
  GlobalHeaderSearch,
  GlobalHeaderButton,
  GlobalHeaderProfile,
  VerticalNavigation
} from "@salesforce/design-system-react";
//Pages
//import Dashboard from "../../pages/dashboard";
import About from "../../pages/about";
import Home from "../../pages/home";
import NoMatch from "../../pages/404";
import DataCenters from "../../pages/data-centers";
import DataCenterDetails from "../../pages/data-center-details";
import { dataCenter } from "../../mocks";

const navItems = [
  { id: "home", href: "/#", label: "Home", icon: "px-fea:catalog" },
  {
    id: "data-centers",
    href: "/#/data-centers",
    label: "Data Centers",
    icon: "px-fea:catalog"
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "",
      navItems: props.navItems || navItems
    };
  }
  changeRoute(e) {
    if (e.selectedItem && e.selectedItem.path) {
      window.location.hash = e.selectedItem.path;
    }
  }

  handleSelect = (event, data) => {
    console.log(data);
    this.setState({ selectedId: data.item.id });
    window.location.hash = data.item.path;
    if (this.props.action) {
      const dataAsArray = Object.keys(data).map(key => data[key]);
      this.props.action("onSelect")(event, data, ...dataAsArray);
    } else if (console) {
      console.log("[onSelect] (event, data)", event, data);
    }
  };

  render() {
    return (
      <Router>
        <div>
          <AppGlobalHeader />
          <GlobalNavBar nav={navItems} onSelect={this.changeRoute} />

          <Switch>
            <Route path="/data-centers" component={DataCenters} />
            <Route path="/" component={Home} />
            <Route path="/details" component={DataCenterDetails} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
