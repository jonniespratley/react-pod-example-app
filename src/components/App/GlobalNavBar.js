import React from "react";
import {
  GlobalNavigationBar,
  GlobalNavigationBarRegion,
  AppLauncher,
  AppLauncherSection,
  AppLauncherTile,
  GlobalNavigationBarDropdown,
  GlobalNavigationBarLink,
  Button,
  Card,
  Icon
} from "@salesforce/design-system-react";

const dropdownCollection = [
  {
    label: "Menu Item One",
    value: "1",
    iconCategory: "utility",
    iconName: "table",
    href: "http://www.google.com"
  },
  {
    label: "Menu Item Two",
    value: "2",
    iconCategory: "utility",
    iconName: "kanban",
    href: "http://www.google.com"
  },
  {
    label: "Menu Item Three",
    value: "3",
    iconCategory: "utility",
    iconName: "side_list",
    href: "http://www.google.com"
  }
];

class GlobalNavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { appName } = this.props;

    return (
      <div>
        <GlobalNavigationBar>
          <GlobalNavigationBarRegion region="primary">
            <AppLauncher
              triggerName={appName}
              modalHeaderButton={<Button label="App Exchange" />}
            >
              <div>Apps</div>
            </AppLauncher>
          </GlobalNavigationBarRegion>
          <GlobalNavigationBarRegion region="secondary" navigation>
            {this.props.nav.map(item => (
              <GlobalNavigationBarLink
                href={item.href}
                label={item.label}
                id={item.id}
                key={item.label}
              />
            ))}
            {/**
           
          <GlobalNavigationBarDropdown
            id="primaryDropdown"
            assistiveText={{ icon: "Context Menu Item 1" }}
            label="Context Menu Item"
            options={dropdownCollection}
          />
           */}
          </GlobalNavigationBarRegion>
          <GlobalNavigationBarRegion region="tertiary">
            {/**
            <GlobalNavigationBarLink
              href="javascript:void(0);"
              label="Actions"
            />
            */}
          </GlobalNavigationBarRegion>
        </GlobalNavigationBar>
      </div>
    );
  }
}

GlobalNavBar.defaultProps = {
  appName: "Console",
  nav: [],
  onSelect: null
};
export default GlobalNavBar;
