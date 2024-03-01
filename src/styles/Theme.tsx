import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

export const theme = {
  colors: {
    softCyan: "#a5f3eb",
    strongCyan: "#10d5c2",
    lightGrayishRed: "#feece7",
    lightRed: "#ff8c66",
    paleBlue: "#bdccff",
    white: "#ffffff",
    veryPaleBlue: "#fafbff",
    lightGrayishBlue1: "#eaeefb",
    lightGrayishBlue2: "#cdd7ee",
    grayishBlue: "#858fad",
    darkDesaturatedBlue: "#293356",
  },
  fontFamily: "'Manrope', sans-serif",
};

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
