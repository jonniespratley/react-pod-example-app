import React from "react";
import classNames from "classnames";
import { Icon, Card } from "@salesforce/design-system-react";

import Panel from "./Panel";
import Path, { PathItem } from "./Path";
import Tree from "../Tree/index";

export const Grid = ({ children, gutters, wrap }) => (
  <div
    className={classNames(
      "slds-grid",
      { "slds-gutters": gutters },
      { "slds-wrap": wrap }
    )}
  >
    {children}
  </div>
);

export const Col = ({ children, size }) => (
  <div className={classNames("slds-col", { [`slds-size_${size}`]: size })}>
    {children}
  </div>
);

export const ListItem = ({ label, selected, children, onClick }) => (
  <div
    className={`list-item ${selected ? "list-item--selected" : null}`}
    onClick={onClick}
  >
    <span>{label}</span>
    {children}
  </div>
);

export const CardPod = ({ name, children }) => (
  <Card
    className="slds-m-left_medim"
    icon={<Icon category="standard" name="user" size="small" />}
    heading={name}
    key={name}
  >
    {children}
  </Card>
);

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
