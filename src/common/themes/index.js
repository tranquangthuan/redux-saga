import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  color: {
    primary: "#4791db",
    secondary: "#9a0036",
    error: "#e57373",
    hover: "rgba(0,0,0,0.08)",
  },
  typography: {
    fontSize: 12,
    borderRadious: 4,
    backgroundColor: "#d32f2f",
  },
  shape: {
    padding: 10,
    margin: 10,
    backgroundColor: "red",
    color: "white",
    borderColor: "#CCCCC",
    borderRadious: 4,
  },
});

export default theme;
