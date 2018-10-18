import React from "react";
import Panel from "./Panel";
import Path, { PathItem } from "./Path";

export const SummaryDetail = ({
  title = "Summary Title",
  children,
  closed
}) => (
  <div className="">
    <div className="slds-summary-detail slds-is-open">
      <button
        className="slds-button slds-button_icon slds-m-right_x-small"
        title="Toggle details for Summary Title"
        aria-controls="expando-unique-id"
        aria-expanded={!closed}
      >
        <svg
          className="slds-button__icon slds-summary-detail__action-icon"
          aria-hidden="true"
        />
        <span className="slds-assistive-text">{title}</span>
      </button>
      <div>
        <div className="slds-summary-detail__title">
          <h3 className="slds-text-heading_small slds-truncate" title={title}>
            {title}
          </h3>
        </div>
        <div
          aria-hidden={!closed}
          className="slds-summary-detail__content"
          id="expando-unique-id"
        >
          {children}
        </div>
      </div>
    </div>
  </div>
);
export default {
  SummaryDetail,
  Path,
  PathItem,
  Panel
};
