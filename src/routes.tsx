import { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const Index = lazy(() => import("./pages/index"));
const ChatIndex = lazy(() => import("./pages/chat/index"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/chat", element: <ChatIndex /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/chat" },
];