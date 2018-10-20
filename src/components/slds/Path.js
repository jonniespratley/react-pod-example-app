import React from "react";
import classNames from "classnames";

export const PathAction = ({ title, onClick }) => (
  <div className="slds-grid slds-path__action">
    <span className="slds-path__stage-name">{title}</span>
    <button
      className="slds-button slds-button_brand slds-path__mark-complete"
      onClick={onClick}
    >
      {title}
    </button>
  </div>
);
export const PathItem = ({
  onClick,
  id = "path",
  title = "Name",
  href = "",
  complete = false,
  active = false,
  current = false
}) => (
  <li
    className={classNames(
      "slds-path__item",
      { "slds-is-incomplete": !complete },
      { "slds-is-current": current },
      { "slds-is-active": active }
    )}
    role="presentation"
  >
    <a
      onClick={onClick}
      aria-selected={active}
      className={`slds-path__link`}
      href="javascript:void(0);"
      id={id}
      role="option"
      tabIndex="-1"
    >
      <span className="slds-path__stage" />
      <span className="slds-path__title">{title}</span>
    </a>
  </li>
);
const Path = ({
  onClick,
  children,
  gutters,
  showAction,
  onActionClick,
  actionLabel,
  paths = []
}) => (
  <div className="slds-path">
    <div
      className={classNames("slds-grid slds-path__track", {
        "slds-gutters": gutters
      })}
    >
      <div className="slds-grid slds-path__scroller-container">
        <div className="slds-path__scroller" role="application">
          <div className="slds-path__scroller_inner">
            <ul
              className="slds-path__nav"
              role="listbox"
              aria-orientation="horizontal"
            >
              {children && children}
              {paths &&
                paths.map(path => (
                  <PathItem key={path.title} {...path} onClick={onClick} />
                ))}
            </ul>
          </div>
        </div>
      </div>
      {showAction && <PathAction title={actionLabel} onClick={onActionClick} />}
    </div>
  </div>
);

export default Path;
