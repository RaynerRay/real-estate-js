import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";

import Link from "next/link";
import React from "react";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
export default async function page() {
  const subcategories = await getData("subcategories");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="SubCategories"
        href="/dashboard/subcategories/new"
        linkTitle="Add Subcategory"
      />

      <div className="py-0">
        {subcategories &&  <DataTable data={subcategories} columns={columns} /> }
        
      </div>
    </div>
  );
}
