import { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import ThemeBar from "./components/Themebar";
import WorkoutPage from "./components/WorkoutPage";
import WorkoutSelector from "./components/WorkoutSelector";
import Endpoints from "./components/Endpoints";
import LoginBar from "./components/LoginBar";

function App() {
  const [themeColor, setThemeColor] = useState(true);

  const theme = createTheme({
    palette: {
      mode: themeColor ? "dark" : "light",
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WorkoutSelector />,
    },
    {
      path: "/endpoints/",
      element: <Endpoints />,
    },
    {
      path: "/workout/:id",
      element: <WorkoutPage />,
    },
    {
      path: "/workout/",
      element: <WorkoutPage />,
    },
  ]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />

        {/* MAIN APP */}
        <div className="main-app-container">
          <ThemeBar themeColor={themeColor} setThemeColor={setThemeColor} />
          <LoginBar />
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
