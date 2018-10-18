import React from "react";
import Panel from "./Panel";
import Path, { PathItem } from "./Path";
import Tree from "../Tree/index";

export const NameValue = ({ name, label, value }) => (
  <dl className="slds-list_horizontal slds-wrap slds-m-around_small">
    <dt
      className="slds-item_label slds-text-color_weak slds-truncate"
      title={label || name}
    >
      {label || name}:
    </dt>
    <dd className="slds-item_detail slds-truncate" title={value}>
      {value}
    </dd>
  </dl>
);
export const NameValuePair = ({ items = [] }) =>
  items.map(item => <NameValue {...item} />);

export const SummaryDetail = ({
  title = "Summary Title",
  children,
  closed
}) => (
  <div className="slds-grid">
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
  Tree,
  SummaryDetail,
  Path,
  PathItem,
  Panel
};
