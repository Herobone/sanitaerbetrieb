import React from "react";

import "../assets/sass/main.module.scss";
import { Container, Grid, Hidden, Paper } from "@material-ui/core";
import { useDefaultStyles } from "../Style";

import phone from "../images/unsplash-phone.jpg";

export const Kontakt = (): JSX.Element => {
    const classes = useDefaultStyles();
    return (
        <Container maxWidth={false}>
            <Grid container spacing={4} className={classes.center}>
                <Hidden smDown>
                    <Grid item md={4}>
                        <Container>
                            <img src={phone} alt="Kontakt" style={{ maxWidth: "100%" }} />
                        </Container>
                    </Grid>
                </Hidden>
                <Grid item md={8} xs={12}>
                    <Paper style={{ padding: "2rem" }} elevation={5}>
                        <h2>Kontakt</h2>
                        <hr />
                        <p>
                            Wir alle haben unsere Stärken. Wenn dir aber doch mal das Wissen oder die Erfahrung fehlen
                            sollten, kein Problem - ich bin immer offen für neue Herausforderungen! Nimm gerne Kontakt
                            zu mir auf - und wir schauen gemeinsam, wie ich dich unterstützen kann.
                        </p>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
