// Imports required imports from React.
import ReactDOM from "react-dom/client";
// Imports required imports from 'react-router-dom' to set up application routing behavior.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Imports necessary functions from Bootstrap to apply CSS.
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

// Imports pages the router will use to conditionally show the appropriate views.
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";

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
    ],
  },
]);

// Renders the RouterProvider component to the HTML.
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
