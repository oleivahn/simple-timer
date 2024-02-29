import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import WorkoutPage from "./pages/WorkoutPage";
import Layout from "./pages/Layout";
import Endpoints from "./components/Endpoints";
import Auth0ProviderWithHistory from "./auth/auth0Provider";
import Dashboard from "./pages/Dashboard";
import MainWorkoutsPage from "./components/MainWorkoutsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
          path: "/dashboard/workouts/",
          element: <MainWorkoutsPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* MAIN APP */}

      <Auth0ProviderWithHistory>
        <div className="main-app-container min-h-screen border-blue-500">
          <RouterProvider router={router} />
        </div>
      </Auth0ProviderWithHistory>
    </div>
  );
}

export default App;
