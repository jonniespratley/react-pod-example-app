import React from "react";
const Panel = ({ children, id = "path", title = "Name", href = "#" }) => (
  <div
    className="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-open"
    aria-hidden="false"
  >
    <div className="slds-panel__header">
      <h2
        className="slds-panel__header-title slds-text-heading_small slds-truncate"
        title="Panel Header"
      >
        Panel Header
      </h2>
      <button
        className="slds-button slds-button_icon slds-button_icon-small slds-panel__close"
        title="Collapse Panel Header"
      >
        <svg className="slds-button__icon" aria-hidden="true" />
        <span className="slds-assistive-text">Collapse Panel Header</span>
      </button>
    </div>
    <div className="slds-panel__body">
      A panel body accepts any layout or component
    </div>
  </div>
);

export default Panel;
