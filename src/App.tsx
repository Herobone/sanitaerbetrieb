import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import CloseIcon from "@material-ui/icons/Close";
import { ListItem, ListItemText, SwipeableDrawer, Theme, useMediaQuery, useScrollTrigger } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Element, Link as ScrollLink } from "react-scroll/modules";
import { Home } from "./sites/Home";
import { Generic } from "./sites/Generic";
import mainStyle from "./assets/sass/main.module.scss";
import footerStyle from "./assets/sass/layout/footer.module.scss";
import { Footer } from "./sites/Footer";
import { SiteNav, SiteNavDict, SiteNavProperties } from "./sites/SiteNav";

export function App(): JSX.Element {
    const trigger = useScrollTrigger({
        threshold: window.innerHeight - 4 * Number.parseFloat(getComputedStyle(document.documentElement).fontSize),
    });
    const theme: Theme = useTheme();
    const largerMedium = useMediaQuery(theme.breakpoints.up("md"));

    const [drawerOpen, setDrawerOpen] = useState(false);
    useEffect(() => console.log(largerMedium), [largerMedium]);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <>
                    <div
                        className={classNames({ [mainStyle.fadeIn]: true, [mainStyle.bg]: true })}
                        id={mainStyle.wrapper}
                    >
                        <div className={mainStyle.bg} />
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
                                    <ScrollLink
                                        to="content"
                                        spy
                                        smooth
                                        duration={750}
                                        className={classNames({
                                            [mainStyle.icon]: true,
                                            [mainStyle.solo]: true,
                                        })}
                                    >
                                        <FontAwesomeIcon icon={faArrowCircleDown} size="4x" />
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                        <header id={mainStyle.header}>
                            <a href={`#${mainStyle.wrapper}`} className={mainStyle.logo}>
                                Sanitärbetrieb - Matthias Junge
                            </a>
                        </header>
                        {trigger && largerMedium && (
                            <div id={mainStyle.fixedNav}>
                                <SiteNav />
                            </div>
                        )}
                        {!trigger && (
                            <nav id={mainStyle.nav}>
                                <SiteNav />
                            </nav>
                        )}
                        <Element id={mainStyle.main} name="content">
                            <Route path="/generic">
                                <Generic />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Element>
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
                        onOpen={() => setDrawerOpen(true)}
                        anchor="right"
                        variant="temporary"
                        onClose={() => setDrawerOpen(false)}
                        open={drawerOpen}
                    >
                        <div className={mainStyle.navPanel}>
                            {SiteNavDict.map((navObject: SiteNavProperties) => (
                                <ListItem button key={`${navObject.link}_mobile`} className={mainStyle.linksNavPanel}>
                                    <ListItemText primary={navObject.name} />
                                </ListItem>
                            ))}
                            <div
                                onClick={() => setDrawerOpen(!drawerOpen)}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(event) => {
                                    if (event.code === "ENTER") {
                                        setDrawerOpen(false);
                                    }
                                }}
                                className={mainStyle.closeNavPanel}
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
