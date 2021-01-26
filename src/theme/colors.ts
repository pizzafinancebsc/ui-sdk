import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#EF4E7B",
  primaryBright: "#FD5E8A",
  primaryDark: "#D8446D",
  secondary: "#FD5A71",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFFBFB",
  backgroundDisabled: "#EAEDF1",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#ECE6DB",
  tertiary: "#F7E7E8",
  text: "#82632D",
  textDisabled: "#BDC2C4",
  textSubtle: "#967232",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#F35369",
  background: "#1B1916",
  backgroundDisabled: "#313138",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#38373A",
  primaryDark: "#0098A1",
  tertiary: "#2C2C37",
  text: "#DABC86",
  textDisabled: "#666671",
  textSubtle: "#FFD283",
  borderColor: "#524B63",
  card: "#27262c",
};
