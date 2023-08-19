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




export async function POST(req: NextRequest) {
    const data = await req.json();

    const { name, email, number, message } = data;

    const from = `${name} <${email}>`;
    const subject = `Contact Form Submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nNumber: ${number ? number : "N/A"}\nMessage: ${message}`;


    const mailOptions = {
        from,
        to: "info@ygafchatandmentor.com",
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Failed to send mail")
            return NextResponse.json({ status: "failed" });
        } else {
            console.log("Mail sent", info)
            return NextResponse.json({ status: "success" });
        }
    });


    return NextResponse.json({ status: "success" });
}