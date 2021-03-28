import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { AppBar, SwipeableDrawer, Theme, Toolbar, useMediaQuery, useScrollTrigger } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Home } from "./sites/Home";
import { Generic } from "./sites/Generic";
import mainStyle from "./assets/sass/main.module.scss";
import footerStyle from "./assets/sass/layout/footer.module.scss";
import { Footer } from "./sites/Footer";
import { SiteNav } from "./sites/SiteNav";

export function App(): JSX.Element {
    const trigger = useScrollTrigger({
        threshold: window.innerHeight - 4 * Number.parseFloat(getComputedStyle(document.documentElement).fontSize),
    });
    const theme: Theme = useTheme();
    const largerMedium = useMediaQuery(theme.breakpoints.up("large"));

    const [drawerOpen, setDrawerOpen] = useState(false);
    useEffect(() => console.log(largerMedium), [largerMedium]);

    return (
        <BrowserRouter>
            <Switch>
                <>
                    <div className={mainStyle.fadeIn} id={mainStyle.wrapper}>
                        <div id={mainStyle.intro}>
                            <h1>Für Erfolg gemacht</h1>
                            <p>
                                Mein Unternehmen bieten ein umfangreiches Angebot an Serviceleistungen in allen
                                bereichen der modernen Sanitärtechnik.
                                <br />
                                Eine gute Handwerksarbeit kann man nicht im Internet bestellen. Sie sollte beständig und
                                zuverlässig sein und dabei das Leben leichter machen.
                                <br />
                                Meine Arbeiten erfüllen diesen Anspruch.
                            </p>
                            <ul className={mainStyle.actions}>
                                <li>
                                    <a
                                        href={`#${mainStyle.header}`}
                                        className={classNames({
                                            [mainStyle.icon]: true,
                                            [mainStyle.solo]: true,
                                        })}
                                    >
                                        <FontAwesomeIcon icon={faArrowCircleDown} size="4x" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <header id={mainStyle.header}>
                            <a href={`#${mainStyle.wrapper}`} className={mainStyle.logo}>
                                Sanitärbetrieb - Matthias Junge
                            </a>
                        </header>
                        {trigger && largerMedium && (
                            <AppBar style={{ height: "4rem", background: "rgba(33, 41, 49, 1)" }}>
                                <Toolbar>
                                    <div id={mainStyle.fixedNav}>
                                        <SiteNav />
                                    </div>
                                </Toolbar>
                            </AppBar>
                        )}
                        {!trigger && (
                            <nav id={mainStyle.nav}>
                                <SiteNav />
                            </nav>
                        )}
                        <div id={mainStyle.main}>
                            <Route path="/generic">
                                <Generic />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </div>
                        <Footer />
                        <div id={footerStyle.copyright}>
                            <ul>
                                <li>&copy; Matthias unter CCA 3.0</li>
                                <li>
                                    Design: <a href="https://html5up.net">HTML5 UP</a>
                                </li>
                            </ul>
                        </div>
                        <div
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(event) => {
                                if (event.code === "ENTER") {
                                    setDrawerOpen(!drawerOpen);
                                }
                            }}
                            id={mainStyle.navPanelToggle}
                            className={mainStyle.alt}
                        >
                            <FontAwesomeIcon icon={faBars} /> Menu
                        </div>
                    </div>
                    <SwipeableDrawer
                        onClose={() => setDrawerOpen(false)}
                        onOpen={() => setDrawerOpen(true)}
                        open={drawerOpen}
                    >
                        <div id={mainStyle.navPanel}>
                            <nav>
                                <SiteNav />
                            </nav>
                            <div
                                onClick={() => setDrawerOpen(!drawerOpen)}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(event) => {
                                    if (event.code === "ENTER") {
                                        setDrawerOpen(!drawerOpen);
                                    }
                                }}
                                className={mainStyle.close}
                            >
                                <CloseIcon />
                            </div>
                        </div>
                    </SwipeableDrawer>
                </>
            </Switch>
        </BrowserRouter>
    );
}
