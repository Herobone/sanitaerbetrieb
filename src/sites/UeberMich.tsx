import React from "react";
import { Box, Container, Grid, Hidden, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDefaultStyles } from "../Style";

import portrait from "../images/portrait.webp";

const useLocalStyle = makeStyles(() => ({
    whyBox: {
        fontSize: "0.7em",
        paddingLeft: "1rem",
        fontWeight: "bold",
        "&:first-letter": {
            fontSize: "2em",
        },
    },
}));

export const UeberMich = (): JSX.Element => {
    const classes = useDefaultStyles();
    const localClasses = useLocalStyle();
    return (
        <>
            <Container maxWidth={false}>
                <Grid container spacing={4} className={classes.center}>
                    <Grid item md={4} xs={12}>
                        <Hidden mdDown>
                            <img src={portrait} alt="Kontakt" style={{ maxHeight: "100%" }} />
                        </Hidden>
                        <Hidden lgUp smDown>
                            <img src={portrait} alt="Kontakt" style={{ maxWidth: "100%" }} />
                        </Hidden>
                        <Hidden mdUp>
                            <Box display="flex" justifyContent="center">
                                <img src={portrait} alt="Kontakt" style={{ maxWidth: "50%" }} />
                            </Box>
                        </Hidden>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Paper style={{ padding: "2rem" }} elevation={5}>
                            <h2>Über mich</h2>
                            <p>
                                Im Handwerk zu Hause! Als gelernter und langjährig erfahrener Gas- Wasserinstallateur
                                habe ich endlich in 2017 den Schritt in die Selbstständigkeit gewagt und führe meine
                                Einzelfirma im Bereich der Sanitärinstallation. Seitdem betreue ich mehrere
                                Bestandskunden regelmäßig und freue mich über deren Kundentreue. Neukunden nehme ich
                                immer wieder gerne auf, oftmals finden diese über Empfehlungen meiner Kunden zu mir. Für
                                mich haben Qualität, Zuverlässigkeit und Präzision oberste Priorität. Davon können Sie
                                als Kunde profitieren.
                            </p>
                            <div className={localClasses.whyBox}>
                                Warum man auf uns zählen kann? Weil unser Unternehmen mehr ist, als nur ein Business.
                                Jede Person in unserem Team ist einzigartig – und wir alle teilen die gleichen Werte.
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
