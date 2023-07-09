import { NextRequest, NextResponse } from "next/server";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../database/firebase";


async function getAllCustomers() {
    const c = collection(db, "customers");
    const querySnapshot = await getDocs(c);
    let customers: any = [];
    querySnapshot.forEach((doc) => {
        customers.push({ id: doc.id, data: doc.data() });
    });
    return customers;
}


export async function GET(req: NextRequest) {

    //Save formData in db.
    const data = await getAllCustomers();

    return NextResponse.json({ status: "success", data });

}