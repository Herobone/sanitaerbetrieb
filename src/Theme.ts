import { createMuiTheme } from "@material-ui/core";

declare module "@material-ui/core/styles/createBreakpoints" {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        default: true;
        xlarge: true;
        large: true;
        medium: true;
        small: true;
        xsmall: true;
        xxsmall: true;
    }
}

export const defaultTheme = createMuiTheme({
    breakpoints: {
        values: {
            default: 1681,
            xlarge: 1281,
            large: 981,
            medium: 737,
            small: 481,
            xsmall: 361,
            xxsmall: 0,
        },
    },
});
