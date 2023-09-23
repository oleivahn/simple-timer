import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";

const ThemeBar = ({ themeColor, setThemeColor }) => {
  // Return the JSX element
  return (
    <div id="theme-bar">
      <Paper square elevation={3}>
        <FormControlLabel
          control={
            <Switch
              id="theme-switch"
              checked={themeColor}
              color="success"
              onClick={() => {
                console.log("Theme switch clicked");
                setThemeColor(!themeColor);
              }}
            />
          }
          label="Theme"
        />
      </Paper>
    </div>
  );
};

export default ThemeBar;
