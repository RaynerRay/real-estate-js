import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";

import Link from "next/link";
import React from "react";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
export default async function page() {
  const cities = await getData("cities");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Cities"
        href="/dashboard/cities/new"
        linkTitle="Add Cities"
      />

      <div className="py-0">
        
        {cities && <DataTable data={cities} columns={columns} /> }
      </div>
    </div>
  );
}
