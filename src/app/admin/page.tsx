import React from "react";
import CustomersTable from "../../components/CustomersTable";

type Props = {};
async function fetchData() {
  const res = await fetch("http://localhost:3000/api/customers", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
}
export default async function Admin({}: Props) {
  const customers = await fetchData();
  console.log(customers);
  return <CustomersTable data={customers} />;
}
