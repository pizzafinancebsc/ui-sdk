import { DefaultTheme } from "styled-components";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
}
declare const MenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
declare const LinkLabel: import("styled-components").StyledComponent<"div", DefaultTheme, {
    isPushed: boolean;
}, never>;
export { MenuEntry, LinkLabel };
