import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";

import Link from "next/link";
import React from "react";
import { columns } from "./columns";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/authOptions";

export default async function page() {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   return null;
  // }
  // const role = session?.user?.role;
  const allProperties = await getData("properties");
  console.log(allProperties)

  // const id = session?.user?.id;
  // const farmerProducts = allProducts.filter((product) => product.userId === id);

  // console.log(id);
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Properties"
        href="/dashboard/properties/new"
        linkTitle="Add Properties"
      />
      <div className="py-8">
        {allProperties && <DataTable data={allProperties}  columns={columns} /> }
      
        {/* {role === "ADMIN" ? (
          <DataTable data={allProperties} columns={columns} />
        ) : (
          <DataTable data={agentProducts} columns={columns} />
        )} */}
      </div>
    </div>
  );
}
