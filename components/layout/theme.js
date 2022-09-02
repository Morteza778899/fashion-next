import { createTheme } from "@mui/material";

const themeColor = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#17c6aa",
    },
    secondary: {
      main: "#fb317d",
    },
    customwhite: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Vazir",
    allVariants: {
      direction: "rtl",
    },
    subtitle2: {
      fontSize: 12,
    },
  },
  components: {
  },
});

export const theme = createTheme(themeColor, {
  components: {
    MuiStack: {
      defaultProps: {
        direction: "row",
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "customwhite",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          "&:hover": {
            color: theme.palette.primary.dark,
            background: "none",
          },
        }),
      },
    },
    MuiLink: {
      defaultProps: {
        fontFamily: "Vazir",
        underline: "none",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          width: "fit-content",
          "&:hover": {
            backgroundColor: "#282828",
          },
        },
        sizeLarge:{
          padding: '8px 32px',
          fontSize:'1.2rem'
        }
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& p": {
            textAlign: "right",
          },
        },
      },
    },
  },
});
