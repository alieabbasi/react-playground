import { createBrowserRouter, RouteObject } from "react-router";
import CharactersList from "./pages/RickAndMorty/CharactersList";
import CharacterPage from "./pages/RickAndMorty/CharacterPage";
import HomePage from "./pages/HomePage";
import TextIndicator from "./pages/TextIndicator/TextIndicator";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "rick-and-morty",
    element: <CharactersList />,
  },
  {
    path: "rick-and-morty/:id",
    element: <CharacterPage />,
  },
  {
    path: "/text-indicator",
    element: <TextIndicator />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;
