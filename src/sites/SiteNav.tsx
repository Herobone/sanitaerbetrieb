import React from "react";
import { Link } from "react-router-dom";
import mainStyle from "../assets/sass/main.module.scss";
import { Social } from "./Social";

export interface SiteNavProperties {
    link: string;
    name: string;
}

export const SiteNavDict: SiteNavProperties[] = [
    {
        link: "",
        name: "Home",
    },
    {
        link: "leistungen",
        name: "Meine Leistungen",
    },
    {
        link: "kontakt",
        name: "Kontakt",
    },
    {
        link: "über-mich",
        name: "Über mich",
    },
];

export const SiteNav = (): JSX.Element => {
    return (
        <>
            <ul className={mainStyle.links}>
                {SiteNavDict.map((navObject: SiteNavProperties) => (
                    <li>
                        <Link to={`/${navObject.link}`} className={mainStyle.tablink}>
                            {navObject.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Social />
        </>
    );
};
