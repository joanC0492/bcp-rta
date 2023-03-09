import { Home, List } from "@/app/BcpApp/pages";

export enum BCP_APP_ROUTER {
  "HOME" = "home",
  "LIST" = "list",
}

interface Iroutes {
  path: string;
  component: () => JSX.Element;
  name: string;
  to?: string;
}

export const routes: Iroutes[] = [
  {
    path: "/",
    component: Home,
    name: BCP_APP_ROUTER.HOME,
  },
  {
    path: "lista-de-usuarios",
    component: List,
    name: BCP_APP_ROUTER.LIST,
  },
];