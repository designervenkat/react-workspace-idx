import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout.jsx";
import HomePage from "./components/pages/Home.page.jsx";
import AboutPage from "./components/pages/About.page.jsx";
import ContactPage from "./components/pages/Contact.page.jsx";
import ProjectPage from "./components/pages/Project.page.jsx";

const navigation = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "project",
        element: <ProjectPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "dummy",
        element: "This is Dummy Component",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={navigation} />
  </StrictMode>
);
