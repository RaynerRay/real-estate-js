import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";

import React from "react";
import { columns } from "./columns";
import { getData } from "@/lib/getData";
import DataTable from "@/components/data-table-components/DataTable";

export default async function page() {
  const blogs = await getData("blogs");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Blogs "
        href="/dashboard/blogs/new"
        linkTitle="Add Article"
      />
      <div className="py-0">
       { blogs && <DataTable data={blogs} columns={columns} /> }
      </div>
    </div>
  );
}

