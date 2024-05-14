// Imports required imports from React.
import React from "react";
import ReactDOM from "react-dom/client";
// Imports required imports from 'react-router-dom' to set up application routing behavior.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Imports required imports from Bootstrap to apply CSS.
import "bootstrap/dist/css/bootstrap.min.css";

// Imports the App.jsx file which works with the router.
import App from "./App";

// Imports pages the router will use to conditionally show the appropriate views.
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import CodePage from "./pages/CodePage";
import DesignPage from "./pages/DesignPage";
import RemodelPage from "./pages/RemodelPage";
import EventPage from "./pages/EventPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

// Defines the accessible routes, and which components to respond to which URL.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/Code",
        element: <CodePage />,
      },
      {
        path: "/Design",
        element: <DesignPage />,
      },
      {
        path: "/Remodel",
        element: <RemodelPage />,
      },
      {
        path: "/Event",
        element: <EventPage />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
      {
        path: "/Resume",
        element: <ResumePage />,
      },
    ],
  },
]);

// Renders the RouterProvider component to the HTML.
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
