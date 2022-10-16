import { createStyles, createTheme } from "@mui/material/styles"
import { Shadows } from "@mui/material/styles/shadows"

export const fonts = {
  primary: {},
  secondary: {
    regular: "Mukta",
  },
  tertiary: {
    regular: "Roboto",
  },
}

export const colors = {
  gray: "#EEEEEE",
  black: "#1B1B1B",
  black2: "#000A12",
  gray7: "#F3F3F3",
  gray1: "#A3A3A3",
  gray2: "#E1E1E1",
  hoverBlue: "#F2F8FF",
  gray3: "#828282",
  gray4: "#757474",
  gray5: "#BCBBBB",
  gray6: "#DDDBDB",
  divider: "#E1E1E1",
  danger: "#FF8F8F",
}

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "40px",
    },
  },
  palette: {
    primary: {
      main: "#101f3e",
      contrastText: "#ffffff",
      //      light: "#F2F8FF",
    },
    secondary: {
      main: "#6bd195",
      contrastText: "#ffffff",
    },
    background: {
      paper: "#F2F8FF",
      default: "#FFFFFF",
    },
    text: {
      primary: "rgba(0,0,0,.9)",
      secondary: "#9597A6",
    },
    action: {
      hover: "#66CEF5",
      disabledBackground: "#E1E1E1",
      disabled: "#ffffff",
    },
    error: {
      main: "#E90101",
    },
    success: {
      main: "#4BB543",
    },
    info: {
      main: "#66CEF5",
      dark: "#2294C1",
      contrastText: "#ffffff",
    },
  },
  spacing: [0, 4, 8, 16, 32, 64, 96, 156],
  shadows: new Array(25).fill("none") as Shadows,
})

export const moreStyles = createStyles({
  showScroll: {
    "::-webkit-scrollbar": {
      WebkitAppearance: "none",
      width: "7px",
      height: "7px",
    },

    "::-webkit-scrollbar-thumb": {
      borderRadius: "4px",
      backgroundColor: "rgba(0, 0, 0, .5)",
      boxShadow: "0 0 1px rgba(255, 255, 255, .5)",
    },
  },
  showScrollX: {
    "::-webkit-scrollbar": {
      WebkitAppearance: "none",
      width: "0px",
      height: "7px",
    },

    "::-webkit-scrollbar-thumb": {
      borderRadius: "4px",
      backgroundColor: "rgba(0, 0, 0, .5)",
      boxShadow: "0 0 1px rgba(255, 255, 255, .5)",
    },
  },
  showScrollY: {
    "::-webkit-scrollbar": {
      WebkitAppearance: "none",
      width: "7px",
      height: "0px",
    },

    "::-webkit-scrollbar-thumb": {
      borderRadius: "4px",
      backgroundColor: "rgba(0, 0, 0, .5)",
      boxShadow: "0 0 1px rgba(255, 255, 255, .5)",
    },
  },
  link: {
    fontWeight: 600,
    color: theme.palette.primary.main,
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
    },
  },
  shadow: {
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
})

export default theme
