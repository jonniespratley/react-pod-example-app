import React from "react";
import {
  IconSettings,
  GlobalHeader,
  GlobalHeaderSearch,
  GlobalHeaderButton,
  GlobalHeaderProfile,
  VerticalNavigation
} from "@salesforce/design-system-react";

const AppGlobalHeader = () => (
  <IconSettings iconPath="/assets">
    <GlobalHeader
      logoSrc="https://52v87v5o5n.codesandbox.io/assets/logo-noname.svg"
      onSkipToContent={() => {
        console.log(">>> Skip to Content Clicked");
      }}
      onSkipToNav={() => {
        console.log(">>> Skip to Nav Clicked");
      }}
    >
      <GlobalHeaderSearch
        placeholder="Search"
        onSelect={() => {
          console.log(">>> onSelect");
        }}
        options={[{ label: "Data Centers" }, { label: "Pods" }]}
      />
      <GlobalHeaderProfile
        avatar="https://52v87v5o5n.codesandbox.io/assets/avatar1.jpg"
        onClick={() => {
          console.log(">>> onClick");
        }}
        onSelect={() => {
          console.log(">>> onSelect");
        }}
        options={[{ label: "Profile Menu" }, { label: "Log out" }]}
      />
    </GlobalHeader>
  </IconSettings>
);
export default AppGlobalHeader;
