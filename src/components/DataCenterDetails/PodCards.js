import React from "react";
import { Icon, Card } from "@salesforce/design-system-react";
import { SummaryDetail } from "../slds/index";
import { DataTable, DataTableColumn } from "@salesforce/design-system-react";

export default ({ title, pods, children, onRowChange, selection = [] }) => (
  <div className="">
    <div className="">
      {pods &&
        pods.map(pod => {
          return (
            <div heading={`${pod.name}`}>
              {pod.children.length &&
                pod.children.map(c => (
                  <Card
                    key={c.name}
                    heading={`${c.name} nodes`}
                    className="slds-m-bottom_small"
                  >
                    <DataTable
                      fixedLayout
                      selection={selection}
                      onRowChange={onRowChange}
                      selectRows
                      items={c.children}
                      id={c.name}
                      bordered
                    >
                      <DataTableColumn label="Name" property="name" />
                      <DataTableColumn label="Address" property="address" />
                      <DataTableColumn label="Labels" property="labels" />
                    </DataTable>
                  </Card>
                ))}
            </div>
          );
        })}
    </div>
  </div>
);
