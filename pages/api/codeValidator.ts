import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";

const codeValidator = async (req: NextApiRequest, res: NextApiResponse) => {

    const body: { code: number, email: string } = JSON.parse(req.body);
    const finalUser = await prisma.unverifiedUser.findFirst({ where: { email: body.email } });

    if (finalUser?.name && finalUser?.dob && finalUser?.password) {
        await prisma.user.create({
            data: {
                name: finalUser.name,
                dob: finalUser.dob,
                email: body.email,
                password: finalUser.password,
            }
        });

        await prisma.room.create({ data: { ownerEmail: body.email } });
        await prisma.unverifiedUser.delete({ where: { email: body.email } })
        return true;
    }

    else res.statusCode = 200;
};

export default codeValidator;