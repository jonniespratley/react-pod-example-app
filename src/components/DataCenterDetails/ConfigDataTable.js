import React from "react";
import { DataTable, DataTableColumn } from "@salesforce/design-system-react";

export default ({ config }) => (
  <DataTable items={config} id="configDataTable" bordered>
    <DataTableColumn key="config-key" label="Name" property="name" truncate />
    <DataTableColumn key="config-val" label="Value" property="value" truncate />
  </DataTable>
);
