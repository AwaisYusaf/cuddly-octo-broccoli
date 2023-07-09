import Congragulations from "@/components/Congragulations";
import React from "react";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { db } from "@/app/api/database/firebase";
import ThanksForOrder from "@/components/ThanksForOrder";
import Header from "@/components/Header";

type Props = {
  searchParams: {
    status: string;
    id: string;
  };
};

async function getCustomer(id: string) {
  const c = collection(db, "customers");
  const querySnapshot = await getDocs(c);
  let customers: any = [];
  querySnapshot.forEach((doc) => {
    customers.push({ id: doc.id, data: doc.data() });
  });
  const customer = customers.filter(
    (customer: any) => customer.data.trxId == id
  );
  return customer.length > 0 ? customer[0] : null;
}

async function validateAndUpdate(id: string) {
  "use server";
  const customer = await getCustomer(id);
  if (customer) {
    let updated = { ...customer };
    updated.data.trxStatus = "paid";
    await setDoc(doc(db, "customers", updated.id), updated);
  }
}

export default function Page({ searchParams: { id, status } }: Props) {
  if (status == "success") {
    validateAndUpdate(id);
  }
  return <ThanksForOrder />;
}
