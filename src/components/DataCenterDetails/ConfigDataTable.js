import React from "react";
import { DataTable, DataTableColumn } from "@salesforce/design-system-react";

export default ({ id, config }) => (
  <DataTable items={config} id="configDataTable" bordered>
    <DataTableColumn
      key={`${id}-dt-column`}
      label="Key"
      property="name"
      truncate
    />
    <DataTableColumn
      key={`${id}-dt-column`}
      label="Value"
      property="value"
      truncate
    />
  </DataTable>
);
