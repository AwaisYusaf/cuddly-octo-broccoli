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





function sendMail(name: string, email: string, number: string, message: string) {
    const from = `${name} <lisalynn512@gmail.com>`;
    const subject = `Contact Form Submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nNumber: ${number ? number : "N/A"}\nMessage: ${message}`;
    const mailOptions = {
        from,
        to: "info@ygafchatandmentor.com",
        subject: subject,
        text: text
    };

    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Failed to send mail", error);
            } else {
                console.log("Mail sent", info)
            }
        });
    }
    catch (e: any) {
        console.log(e)
    }
}



export async function POST(req: NextRequest) {
    const data = await req.json();
    const { name, email, number, message } = data;
    sendMail(name, email, number, message);
    return NextResponse.json({ status: "success" })
}