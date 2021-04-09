import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import CloseIcon from "@material-ui/icons/Close";
import { ListItem, ListItemText, SwipeableDrawer, Theme, useMediaQuery, useScrollTrigger } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Element, Link as ScrollLink } from "react-scroll/modules";
import { Home } from "./sites/Home";
import mainStyle from "./assets/sass/main.module.scss";
import footerStyle from "./assets/sass/layout/footer.module.scss";
import { Footer } from "./parts/Footer";
import { Leistungen } from "./sites/Leistungen";
import { SiteNav, SiteNavDict, SiteNavProperties } from "./parts/SiteNav";
import { Kontakt } from "./sites/Kontakt";
import { UeberMich } from "./sites/UeberMich";

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
            <>
                <div className={classNames({ [mainStyle.fadeIn]: true, [mainStyle.bg]: true })} id={mainStyle.wrapper}>
                    <div className={mainStyle.bg} />
                    <div id={mainStyle.intro}>
                        <h1>Für den Erfolg gemacht</h1>
                        <p>
                            Mein Unternehmen bietet ein umfangreiches Angebot an Serviceleistungen in allen Bereichen
                            der modernen Sanitärtechnik. <br />
                            Eine gute Handwerksarbeit kann man nicht im Internet bestellen. Sie sollte beständig und
                            zuverlässig sein und dabei das Leben leichter machen. <br />
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
                        <Switch>
                            <Route path="/leistungen">
                                <Leistungen />
                            </Route>
                            <Route path="/kontakt">
                                <Kontakt />
                            </Route>
                            <Route path="/über-mich">
                                <UeberMich />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Element>
                    <Footer />
                    <div id={footerStyle.copyright}>
                        <ul>
                            <li>
                                &copy; Matthias Junge unter{" "}
                                <a href="https://creativecommons.org/licenses/by/3.0/de">CCA 3.0</a>
                            </li>
                            <li>
                                Design: <a href="https://html5up.net">HTML5 UP</a>
                            </li>
                            <li>
                                Erstellt von{" "}
                                <a href="https://github.com/Herobone/">
                                    <b>Julius Gesang</b>
                                </a>
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
                            <Link
                                to={`/${navObject.link}`}
                                className={mainStyle.linksNavPanel}
                                onClick={() => setDrawerOpen(false)}
                            >
                                <ListItem button key={`${navObject.link}_mobile`}>
                                    <ListItemText primary={navObject.name} />
                                </ListItem>
                            </Link>
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
        </BrowserRouter>
    );
}
