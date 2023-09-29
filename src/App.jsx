import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import ThemeBar from "./components/Themebar";
import WorkoutPage from "./pages/WorkoutPage";
import Home from "./pages/Home";
import Endpoints from "./components/Endpoints";
import Auth0ProviderWithHistory from "./auth/auth0Provider";
import Dashboard from "./pages/Dashboard";

function App() {
  // const [themeColor, setThemeColor] = useState(true);

  // // Tailwind dark mode
  // useEffect(() => {
  //   document
  //     .querySelector("html")
  //     .setAttribute("data-theme", themeColor ? "dark" : "cupcake");
  // }, [themeColor]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/dashboard/",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/endpoints/",
          element: <Endpoints />,
        },
        {
          path: "/dashboard/workout/:id",
          element: <WorkoutPage />,
        },
        {
          path: "/dashboard/workout/",
          element: <WorkoutPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* MAIN APP */}
      <Auth0ProviderWithHistory>
        <div className="main-app-container min-h-screen border-blue-500">
          {/* <ThemeBar themeColor={themeColor} setThemeColor={setThemeColor} /> */}
          <RouterProvider router={router} />
        </div>
      </Auth0ProviderWithHistory>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
