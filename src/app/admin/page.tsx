"use client";
import React, { useState } from "react";
import CustomersTable from "../../components/CustomersTable";
import AdminLogin from "@/components/AdminLogin";

type Props = {};

export default function Admin({}: Props) {
  const [isAuthentcated, setAuthenticated] = useState(false);

  return isAuthentcated ? (
    <CustomersTable />
  ) : (
    <AdminLogin login={setAuthenticated} />
  );
}
