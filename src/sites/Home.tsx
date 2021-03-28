import React from "react";

import "../assets/sass/main.module.scss";
import { Container } from "@material-ui/core";

export const Home = (): JSX.Element => {
    return (
        <>
            <Container style={{ minHeight: window.innerHeight }}>Hello</Container>
        </>
    );
};
