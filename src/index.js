import React from "react";
import ReactDOM from "react-dom";
import settings from "@salesforce/design-system-react/components/settings";

import App from "./components/App/index";

import "./styles.css";
//import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

function AppContainer() {
  return (
    <div className="App">
      <App />
    </div>
  );
}

settings.setAppElement("#root");

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
