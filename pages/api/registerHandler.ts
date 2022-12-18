import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@prisma/client";
import prisma from "../../prisma/prisma";
import { randomInt } from "crypto";
import sendEmail from "../../helpers/nodeMailer";

export const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const body: User = JSON.parse(req.body);
    const verificationCode = randomInt(1000000, 9999999);

    await prisma.unverifiedUser.create({
        data: {
            email: body.email,
            dob: body.dob,
            name: body.name,
            password: body.password,
            code: verificationCode
        }
    });

    sendEmail(body.email, body.name, verificationCode);
    setTimeout(() => prisma.unverifiedUser.delete({ where: { email: body.email } }), 1000 * 60 * 10);
};


export default registerHandler;


