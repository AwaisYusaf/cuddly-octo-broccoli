import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail'
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAILER_EMAIL as string,
        pass: process.env.MAILER_PASSWORD as string
    }
});





async function sendMail(name: string, email: string, number: string, message: string) {

}



export async function POST(req: NextRequest) {
    const data = await req.json();
    const { name, email, number, message } = data;
    //sendMail(name, email, number, message);

    const from = `${name} <lisalynn512@gmail.com>`;
    const subject = `Contact Form Submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nNumber: ${number ? number : "N/A"}\nMessage: ${message}`;
    const mailOptions = {
        from,
        to: "info@ygafchatandmentor.com",
        subject: subject,
        text: text
    };

    let mailSent = false;

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
                reject();
            } else {
                mailSent = true;
                resolve({ status: "success" });
            }
        });
    });

    if (mailSent) {
        return NextResponse.json({ status: "success" })
    }
    else {
        return NextResponse.json({ status: "error" })
    }



}