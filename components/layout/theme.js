import { createTheme, responsiveFontSizes } from "@mui/material";

let themeColor = createTheme({
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
    fontFamily: "IranYekan",
    allVariants: {
      direction: "rtl",
    },
    subtitle2: {
      fontSize: 12,
    },
    body2: {
      opacity: 0.8,
    },
  },
  components: {},
});
themeColor = responsiveFontSizes(themeColor)
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
          "&:hover": {
            backgroundColor: "#282828",
          },
        },
        containedInfo: {
          backgroundColor: "#efefef",
          boxShadow: "none",
          color: "black",
          ":hover": {
            color: "white",
          },
        },
        sizeLarge: {
          padding: "8px 32px",
          fontSize: "1.2rem",
        },
        sizeMedium: {
          padding: "6px 24px",
          fontSize: "1rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            right: 20,
            left: "unset",
            transformOrigin: "top right",
          },
          "& p": {
            textAlign: "right",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& label": {
            right: 20,
            left: "unset",
            transformOrigin: "top right",
          },
          "& .MuiSelect-select": {
            paddingRight: "12px !important",
          },
          "& svg": {
            left: 8,
            right: "unset",
          },
          "& .MuiFilledInput-root": {
            ":before": {
              borderBottom: "1px solid #80808040",
            },
            ":hover": {
              ":before": {
                borderBottom: "1px solid #80808040 !important",
              },
            },
          },
        },
      },
    },
  },
});
