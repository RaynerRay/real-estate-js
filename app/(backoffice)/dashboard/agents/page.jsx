import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";

import React from "react";
import { columns } from "./columns";
import { getData } from "@/lib/getData";
import DataTable from "@/components/data-table-components/DataTable";

export default async function page() {
  const agents = await getData("agents");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Agents "
        href="/dashboard/agent/new"
        linkTitle="Add An Agent"
      />
      <div className="py-0">
       {agents && <DataTable data={agents} columns={columns} filterKeys={["name"]} /> }
      </div>
    </div>
  );
}

