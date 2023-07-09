import React from "react";

type Props = { params: { id: string } };

function getCustomerById(id: string) {
  // const res = await fetch("");
}

export default function Page({ params: { id } }: Props) {
  return <div>Page {id}</div>;
}
