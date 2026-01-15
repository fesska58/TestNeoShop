import { createBrowserRouter } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import BasketPage from "../pages/BasketPage/BasketPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CatalogPage />,
  },
  {
    path: "/cart",
    element: <BasketPage />,
  },
]);
