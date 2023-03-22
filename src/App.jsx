import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./pages/Main";
import Home from "./pages/Home";
import List from "./pages/List";
import Search from "./pages/Search";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "list",
          element: <List />,
        },
        {
          path: "search",
          element: <Search />,
        },
      ],
    },
  ]);
  if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
  }
  return <RouterProvider router={router} />;
}

export default App;
