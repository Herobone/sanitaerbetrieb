import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const useDefaultStyles = makeStyles((theme: Theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        alignContent: "flex-start",
        justifyContent: "center",
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        minHeight: 500,
        paddingTop: "56.25%", // 16:9
    },
    portraitMedia: {
        paddingTop: "100%",
        height: "60%",
    },
    cardContent: {
        flexGrow: 1,
    },
    center: {
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
    },
    divider: {
        padding: 0,
        margin: 0,
        marginBottom: theme.spacing(2),
    },
}));
