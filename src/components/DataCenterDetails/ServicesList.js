import React from "react";
import { MediaObject, Icon } from "@salesforce/design-system-react";

export default ({ services = [], icon }) => {
  return services.map(s => (
    <div className="slds-m-horizontal_small slds-m-bottom_small" key={s.name}>
      <MediaObject
        figure={icon && <Icon category="standard" name="user" size="small" />}
        body={s.name}
      />
    </div>
  ));
};
