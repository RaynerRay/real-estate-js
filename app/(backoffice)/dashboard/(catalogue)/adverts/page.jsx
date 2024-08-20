import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";

import Link from "next/link";
import React from "react";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
export default async function page() {
  const adverts = await getData("adverts");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Adverts"
        href="/dashboard/adverts/new"
        linkTitle="Add Advert"
      />

      <div className="py-0">
        {adverts && <DataTable data={adverts} columns={columns} />}
      </div>
    </div>
  );
}
