import nodemailer from "nodemailer";

const sendEmail = (recipient: string, name: string, code: number) => {

    let mailTransporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_APP_PASSWORD
        }
    });
    
    let details = {
        from: `Chilling Email Service<${process.env.EMAIL}>`,
        to: recipient,
        subject: "verify your address",
        html: `Hello, ${name}, in order to verify your e-mail address, 
        please use this code on our website login page: ${code}`
    }
    mailTransporter.sendMail(details, e => undefined);
}

export default sendEmail;