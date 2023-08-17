import { NextRequest, NextResponse } from "next/server";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../database/firebase";
import { v4 } from "uuid"

export async function POST(req: NextRequest) {
    const data = await req.json();
    const id = v4();

    // Add timestamp in data
    const dateAndTime = new Date();


    await setDoc(doc(db, "ebook-downloaders", id.toString()), {
        ...data, id, timestamp: dateAndTime.toLocaleString()
    });

    return NextResponse.json({ status: "success", id })
}