import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";


export interface MediatorProps {
  from: string,
  to: string,
  dynamic: boolean,
  dynamicFunction: (router: NextRouter, data: Session | null) => void
}

const ClientSideMediator = ({ from, to, dynamic, dynamicFunction }: MediatorProps) => {
  const { data } = useSession();
  const router = useRouter();
  if (dynamic) dynamicFunction(router, data);

  else router.route
};



export default ClientSideMediator;