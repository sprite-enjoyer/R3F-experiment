import { User } from "@prisma/client";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import SpotifyButton from "../../../components/SpotifyButton";
import prismaClient from "../../../prisma/prisma";
import { authOptions } from "../../api/auth/[...nextauth]";

export const getServerSideProps: GetServerSideProps<{ user: User }> = async (context) => {
  const id = context.query.userID?.toString();
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  let user = await prismaClient.user.findFirst({ where: { email: id } });

  if (!session) return { props: {}, redirect: { destination: "/login", permanent: false, } };

  if (!user) {
    const newEmail = session.user?.email ?? "null";
    const newName = session.user?.name ?? "null"
    user = await prismaClient.user.create({ data: { email: newEmail, name: newName } });
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(user))
    }
  }
};

const Profile = ({ id, ...rest }: User) => {

  return (
    <div>
      <button>
        <Link onClick={async () => await signOut()} href={"/login"}>SignOut</Link>
      </button>
    </div>
  )
};


export default Profile;