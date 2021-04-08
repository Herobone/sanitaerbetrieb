import React from "react";

import "../assets/sass/main.module.scss";
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@material-ui/core";

import faucet from "../images/unsplash-faucet.jpg";
import grinder from "../images/grinder.webp";
import toilette from "../images/unsplash-toilet.jpg";
import portrait from "../images/portrait.webp";
import { useDefaultStyles } from "../Style";
import { CustomCard } from "../parts/CustomCard";

const DescriptionCardOne = (): JSX.Element => {
    return (
        <CustomCard heading="Mein Projekt" image={faucet}>
            Ich habe immer ein Projekt, an dem ich arbeite. Meistens für meine Kunden. Von Zeit zu Zeit ist es aber auch
            ein persönliches Vorhaben, das mich neue Inspiration gewinnen lässt.
        </CustomCard>
    );
};
const DescriptionCardTwo = (): JSX.Element => {
    return (
        <CustomCard heading="Meine Kunden" image={toilette}>
            Ich bin erfahren, verlässlich sowie jederzeit auf gute Ergebnisse fokussiert und weiß es zu schätzen, mit
            großartigen Kunden zusammenzuarbeiten.
        </CustomCard>
    );
};
const DescriptionCardThree = (): JSX.Element => {
    return (
        <CustomCard heading="Meine Motivation" image={grinder}>
            Meine Arbeit ist meine Leidenschaft und ein positiver Antrieb für jeden Tag. Sie bringt mich dazu, an jeder
            neuen Herausforderung zu wachsen und so neue Ziele zu erreichen.
        </CustomCard>
    );
};

export const Home = (): JSX.Element => {
    const classes = useDefaultStyles();
    return (
        <>
            <Container maxWidth={false}>
                <h2>Lerne mich kennen</h2>
                <Grid container spacing={4} className={classes.cardGrid}>
                    <DescriptionCardOne />
                    <DescriptionCardTwo />
                    <DescriptionCardThree />
                </Grid>
            </Container>
            <Container maxWidth={false}>
                <Box display="flex" justifyContent="center">
                    <h2>Meine Leistungen</h2>
                </Box>
                <Grid container spacing={4} className={classes.center}>
                    <Grid item lg={6} md={10} xs={12}>
                        <Card className={classes.card} elevation={0}>
                            <CardMedia className={classes.portraitMedia} image={portrait} title="Matthias Junge" />
                            <CardContent className={classes.cardContent}>
                                <hr className={classes.divider} />
                                <Typography>
                                    Ich liebe meine Arbeit, daraus mache ich kein Geheimnis. Und was mich wirklich
                                    glücklich macht, ist, wenn die Kunden sich über das Ergebnis meiner Arbeit freuen.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
