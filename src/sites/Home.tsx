import React from "react";

import "../assets/sass/main.module.scss";
import { Box, Card, CardContent, CardMedia, Container, Grid, Theme, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import faucet from "../images/unsplash-faucet.jpg";
import grinder from "../images/grinder.webp";
import toilette from "../images/unsplash-toilet.jpg";
import portrait from "../images/portrait.webp";

const useStyles = makeStyles((theme: Theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        alignContent: "center",
        alignItems: "center",
        justify: "center",
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
    cardText: {
        minHeight: "13vh",
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

const DescriptionCardOne = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={faucet} title="Mein Projekt - Symbolbild" />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Mein Projekt
                    </Typography>
                    <hr className={classes.divider} />
                    <Typography className={classes.cardText}>
                        Ich habe immer ein Projekt, an dem ich arbeite. Meistens für meine Kunden. Von Zeit zu Zeit ist
                        es aber auch ein persönliches Vorhaben, das mich neue Inspiration gewinnen lässt.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};
const DescriptionCardTwo = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={toilette} title="Spühlkasten" />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Meine Kunden
                    </Typography>
                    <hr className={classes.divider} />
                    <Typography className={classes.cardText}>
                        Ich bin erfahren, verlässlich sowie jederzeit auf gute Ergebnisse fokussiert und weiß es zu
                        schätzen, mit großartigen Kunden zusammenzuarbeiten.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};
const DescriptionCardThree = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={grinder} title="Meine Motivation - Symbolbild" />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Meine Motivation
                    </Typography>
                    <hr className={classes.divider} />
                    <Typography className={classes.cardText}>
                        Meine Arbeit ist meine Leidenschaft und ein positiver Antrieb für jeden Tag. Sie bringt mich
                        dazu, an jeder neuen Herausforderung zu wachsen und so neue Ziele zu erreichen.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export const Home = (): JSX.Element => {
    const classes = useStyles();
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
