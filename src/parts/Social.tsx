/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainStyle from "../assets/sass/main.module.scss";

export const Social = (): JSX.Element => {
    return (
        <ul className={mainStyle.icons}>
            <li>
                <a href="https://github.com/Herobone/sanitaerbetrieb" className={mainStyle.icon}>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </li>
        </ul>
    );
};
/* eslint-enable jsx-a11y/anchor-is-valid */
