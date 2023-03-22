import Home from "@/pages/Home/Lazy";

interface Route {
  name: string;
  path: string;
  component: React.FC;
}

const Routes: Route[] = [{ name: "Home", path: "/", component: Home }];

export default Routes;
