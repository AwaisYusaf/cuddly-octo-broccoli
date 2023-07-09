import { NextRequest, NextResponse } from "next/server";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../database/firebase";
import Stripe from "stripe";
import { getPackageById } from "@/constants/data";



async function getId() {
    const c = collection(db, "customers");
    const querySnapshot = await getDocs(c);
    let ids: any = [];
    querySnapshot.forEach((doc) => {
        ids.push(+doc.id);
    });

    ids.sort(function (a: any, b: any) { return a - b });

    if (ids.length == 0) {
        return 1;
    }

    return ids[ids.length - 1] + 1;
}
async function createSession(packageId: number) {
    //@ts-ignore
    const s = new Stripe(process.env.STRIPE_SECRET_KEY);
    const pkg = getPackageById(packageId);
    if (!pkg) {
        return "Package not found";
    }
    try {
        // Create Checkout Sessions from body params.
        const session = await s.checkout.sessions.create({
            line_items: [{
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: "Package " + pkg.id + " - " + pkg.tagLine,
                    },
                    unit_amount: (+pkg.price) * 100
                },
                quantity: 1
            }],
            currency: "usd",
            mode: 'payment',
            // success_url: `http://localhost:3000/checkout?status=success&id={CHECKOUT_SESSION_ID}`,
            success_url: process.env.STRIPE_SUCCESS_URL!,
            cancel_url: `http://localhost:3000/checkout?status=failed`,
        });
        return session;
    } catch (err: any) {
        return err.message;
    }

}


export async function POST(req: NextRequest) {

    const formData = await req.json();
    const id = await getId();
    //Create a stripe session
    const session = await createSession(+formData.packageId);

    //Save formData in db.
    await setDoc(doc(db, "customers", id.toString()), { ...formData, trxId: session.id, trxStatus: "unpaid" });

    return NextResponse.json({ status: "success", url: session.url });

}