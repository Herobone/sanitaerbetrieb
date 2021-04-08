import React from "react";
import { Container, Grid } from "@material-ui/core";
import { CustomCard } from "../parts/CustomCard";
import trockenlegung from "../images/trockenlegung.webp";
import toilette from "../images/toilette.webp";
import spuelkasten from "../images/spuelkasten.webp";
import { useDefaultStyles } from "../Style";

export const Leistungen = (): JSX.Element => {
    const classes = useDefaultStyles();
    return (
        <>
            <Container maxWidth={false}>
                <h2>Meine Leistungen</h2>
                <Grid container spacing={4} className={classes.cardGrid}>
                    <CustomCard heading="Sanitär Kundendienst" image={toilette} height={13}>
                        <ul>
                            <li>Reparatur an Rohrleitungen</li>
                            <li>
                                Instandsetzung und Entkalkung von Spülkästen unterschiedlicher Hersteller und Marken
                            </li>
                            <li>Austausch von Sanitär-gegenständen und Armaturen in Küche, Bad, Toilette und Keller</li>
                        </ul>
                    </CustomCard>
                    <CustomCard heading="Sanitär Installationen" image={spuelkasten} height={13}>
                        <ul>
                            <li>Bad- und WC Umbau</li>
                            <li>Badsanierung </li>
                            <li>Installation von Sanitärgegenständen und Armaturen </li>
                        </ul>
                    </CustomCard>
                    <CustomCard heading="Leckortung  & Trocknung" image={trockenlegung} height={13}>
                        <ul>
                            <li>Auffinden von Rohrleitungsschäden (Leckortung)</li>
                            <li>Thermographie</li>
                            <li>Technische Trocknung von Rohrleitungs-Wasserschäden</li>
                            <li>Dämmschichttrocknung</li>
                            <li>Hohlraumtrocknung</li>
                            <li>Wandtrocknung</li>
                        </ul>
                    </CustomCard>
                </Grid>
            </Container>
        </>
    );
};
