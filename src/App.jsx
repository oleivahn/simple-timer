import { useState } from "react";

import { createTheme, ThemeProvider, CssBaseline, Paper } from "@mui/material";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./App.css";

import WorkoutPage from "./components/WorkoutPage";

function App() {
  const [themeColor, setThemeColor] = useState(true);

  const theme = createTheme({
    palette: {
      mode: themeColor ? "dark" : "light",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <div id="theme-bar">
          <Paper square elevation={3}>
            <FormControlLabel
              control={
                <Switch
                  id="theme-switch"
                  checked={themeColor}
                  color="success"
                  onClick={() => setThemeColor(!themeColor)}
                />
              }
              label="Theme - [App.jsx]"
            />
          </Paper>
        </div>
        {/* MAIN APP */}
        <div className="main-app-container">
          <WorkoutPage />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
