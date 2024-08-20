import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";

import Link from "next/link";
import React from "react";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
export default async function page() {
  const companies = await getData("companies");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="companies"
        href="/dashboard/companies/new"
        linkTitle="Add Company"
      />

      <div className="py-0">
       {companies && <DataTable data={companies} columns={columns} /> }
      </div>
    </div>
  );
}
