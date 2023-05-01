import { useState } from "react";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";

import ThemeBar from "./components/Themebar";

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
        <ThemeBar themeColor={themeColor} setThemeColor={setThemeColor} />
        {/* MAIN APP */}
        <div className="main-app-container">
          <h1>Your content goes in here...</h1>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
