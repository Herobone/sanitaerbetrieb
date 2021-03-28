import React from "react";
import mainStyle from "../assets/sass/main.module.scss";
import { Link } from "react-router-dom";
import { Social } from "./Social";

export const SiteNav = (): JSX.Element => {
    return (
        <>
            <ul className={mainStyle.links}>
                <li>
                    <Link to="/" className={mainStyle.tablink}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/leistungen" className={mainStyle.tablink}>
                        Meine Leistungen
                    </Link>
                </li>
                <li>
                    <Link to="/kontakt" className={mainStyle.tablink}>
                        Kontakt
                    </Link>
                </li>
                <li>
                    <Link to="/über-mich" className={mainStyle.tablink}>
                        Über mich
                    </Link>
                </li>
            </ul>
            <Social />
        </>
    );
};
