import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import mainStyle from "../assets/sass/main.module.scss";

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
    const [path, setPath] = useState("");
    return (
        <>
            <ul className={mainStyle.links}>
                {SiteNavDict.map((navObject: SiteNavProperties) => (
                    <li
                        key={navObject.link}
                        className={classNames({
                            [mainStyle.active]: path === navObject.link,
                        })}
                    >
                        <Link to={`/${navObject.link}`} onClick={() => setPath(navObject.link)}>
                            {navObject.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <span className={mainStyle.logo}>Sanitärbetrieb Junge</span>
        </>
    );
};
