import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";

import Link from "next/link";
import React from "react";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
export default async function page() {
  const towns = await getData("towns");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="towns"
        href="/dashboard/towns/new"
        linkTitle="Add Towns"
      />

      <div className="py-0">
        { towns && <DataTable data={towns} columns={columns} /> }
      </div>
    </div>
  );
}
