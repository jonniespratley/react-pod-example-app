import React from "react";
export const PathItem = ({
  id = "path",
  title = "Name",
  href = "#",
  active = false
}) => (
  <li className="" role="presentation">
    <a
      aria-selected={active}
      className={`slds-path__link`}
      href={href}
      id={id}
      role="option"
      tabindex="-1"
    >
      <span className="slds-path__stage" />
      <span className="slds-path__title">{title}</span>
    </a>
  </li>
);
const Path = ({ paths = [], children }) => (
  <div className="slds-path">
    <div className="slds-grid slds-path__track">
      <div className="slds-grid slds-path__scroller-container">
        <div className="slds-path__scroller" role="application">
          <div className="slds-path__scroller_inner">
            <ul
              className="slds-path__nav"
              role="listbox"
              aria-orientation="horizontal"
            >
              {children && children}
              {paths && paths.map(path => <PathItem {...path} />)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Path;
