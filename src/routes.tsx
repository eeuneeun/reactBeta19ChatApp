import { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const Index = lazy(() => import("./pages/index"));
const PoroductsIndex = lazy(() => import("./pages/products/index"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/products", element: <PoroductsIndex /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/products" },
];