import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = JSON.parse(req.body);
    const user = await prisma.user.findFirst({ where: { email: email } })

    if (user) res.send({ body: { correct: user.password === password && user.email === email } });
    else res.send({ body: { correct: false } });
};

export default loginHandler;