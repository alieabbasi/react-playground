import { createBrowserRouter, RouteObject } from "react-router";
import CharactersList from "./pages/CharactersList";
import CharacterPage from "./pages/CharacterPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <CharactersList />,
  },
  {
    path: "/:id",
    element: <CharacterPage />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  }
];

const router = createBrowserRouter(routes);

export default router;