import HomePage from "../modules/home/HomePage";

export interface IRoute {
  path: string;
  name: string;
  component: React.FC;
}

export const RouteList: IRoute[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
];
