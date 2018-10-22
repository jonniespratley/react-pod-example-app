import React from "react";
import { DataTable, DataTableColumn } from "@salesforce/design-system-react";

export default ({ id, config }) => (
  <DataTable items={config} id="configDataTable">
    <DataTableColumn label="Key" property="name" truncate />
    <DataTableColumn label="Value" property="value" truncate />
  </DataTable>
);
