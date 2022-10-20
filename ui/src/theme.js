import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      secondary: blue[50],
    },
    neutral: {
      main: grey[600],
    }
  },
  typography: {
    fontFamily: ["Noto Sans JP"].join(","),
  },
});

theme = createTheme(theme, {
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main,
          justifyContent: "space-between",
          [theme.breakpoints.up("md")]: {
            paddingLeft: 32,
            paddingRight: 32,
          },
          [theme.breakpoints.up("xl")]: {
            paddingLeft: 45,
            paddingRight: 45,
          },
        },
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: theme.palette.primary.secondary,
            "&:hover": {
              background: theme.palette.primary.secondary,
            },
            "& .MuiListItemIcon-root,.MuiListItemText-root": {
              color: theme.palette.primary.main,
            },
          },
        },
      },
    },
  },
});

export default theme;
