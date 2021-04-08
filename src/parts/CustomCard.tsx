import React, { PropsWithChildren } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDefaultStyles } from "../Style";

interface Props {
    heading: string;
    image: string;
    height?: number;
}

export const CustomCard = (props: PropsWithChildren<Props>): JSX.Element => {
    const useStyle = makeStyles(() => ({
        cardText: {
            minHeight: `${props.height}rem`,
        },
    }));
    const classes = useDefaultStyles();
    const localClasses = useStyle();
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={props.image} title={props.heading} />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.heading}
                    </Typography>
                    <hr className={classes.divider} />
                    <Typography className={localClasses.cardText}>{props.children}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

CustomCard.defaultProps = {
    height: 8,
};
