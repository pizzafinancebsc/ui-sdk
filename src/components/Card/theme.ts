import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";

export type CardTheme = {
  background: string;
  boxShadow: string;
  boxShadowActive: string;
  boxShadowSuccess: string;
  boxShadowWarning: string;
};

export const light: CardTheme = {
  background: lightColors.card,
  boxShadow: "0px 0px 10px rgba(9, 31, 67, 0.1)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
};

export const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: "0px 0px 10px rgba(9, 31, 67, 0.1)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
};
