import { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const Index = lazy(() => import("./pages/index"));
const ChatIndex = lazy(() => import("./pages/chat/index"));
const CodingIndex = lazy(() => import("./pages/coding/index"));
const ReportIndex = lazy(() => import("./pages/report/index"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/chat", element: <ChatIndex /> },
      { path: "/coding", element: <CodingIndex /> },
      { path: "/report", element: <ReportIndex /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/chat" },
  { route: "/coding" },
  { route: "/report" },
];