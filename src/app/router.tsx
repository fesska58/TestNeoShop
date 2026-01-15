import { createBrowserRouter } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import Basket from "../pages/BasketPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CatalogPage />,
  },
  {
    path: "/cart",
    element: <Basket />,
  },
]);
