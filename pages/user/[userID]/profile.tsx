import { Session, User } from "@prisma/client";
import { randomBytes, randomUUID } from "crypto";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { MouseEventHandler } from "react";
import prismaClient from "../../../prisma/prisma";
import { authOptions } from "../../api/auth/[...nextauth]";

export const getServerSideProps: GetServerSideProps<{ user: User }> = async (context) => {
  const redirectToLoginProps = { props: {}, redirect: { destination: "/login", permanent: false, } };
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  const email = context.query["userID"]?.toString();

  if (!email || !session) return redirectToLoginProps;
  let user = await prismaClient.user.findUnique({ where: { email: email } });
  if (!user) user = await prismaClient.user.create({ data: { email: email, image: session?.user?.image } });
  let dbSession = await prismaClient.session.findFirst({ where: { userId: user.id } });

  if (!dbSession) {
    dbSession = await prismaClient.session.create(
      {
        data: {
          sessionToken: randomUUID?.() ?? randomBytes(32).toString("hex"),
          userId: user.id,
          expires: new Date(new Date().setDate(new Date().getDate() + 30))
        }
      }
    );
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(user))
    }
  }
};

const Profile = ({ id, email, name }: User) => {
  const onClickHandler: MouseEventHandler<HTMLAnchorElement> | undefined = () => {
    signOut();
  };

  return (
    <div>
      <button>
        <Link onClick={onClickHandler} href={"/login"}>SignOut</Link>
        {id}
        <br />
        {email}
        <br />
        {name}
      </button>
    </div>
  )
};


export default Profile;