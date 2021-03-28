/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "../assets/sass/main.module.scss";

import Bad from "../images/bad.webp";
import Wasserhahn from "../images/wasserhahn.webp";
import Grinder from "../images/grinder.webp";

export const Generic = (): JSX.Element => {
    return (
        <section className="post">
            <ul className="actions fit flexgrid">
                <li className="fit row">
                    <div className="container">
                        <div className="image-area">
                            <div className="image-wrapper">
                                <div className="image-container">
                                    <img alt="Badezimmer" className="image fit" src={Bad} />
                                </div>
                            </div>
                        </div>

                        <div className="content-area">
                            <div className="text">
                                <h3>Mein Projekt</h3>
                                <p>
                                    Ich habe immer ein Projekt, an dem ich arbeite. Meistens für meine Kunden. Von Zeit
                                    zu Zeit ist es aber auch ein persönliches Vorhaben, das mich neue Inspiration
                                    gewinnen lässt.
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="fit row">
                    <div className="container">
                        <div className="image-area">
                            <div className="image-wrapper">
                                <div className="image-container">
                                    <img className="image fit" alt="Wasserhahn" src={Wasserhahn} />
                                </div>
                            </div>
                        </div>

                        <div className="content-area">
                            <div className="text">
                                <h3>Meine Kunden</h3>
                                <p>
                                    Ich bin erfahren, verlässlich sowie jederzeit auf gute Ergebnisse fokussiert und
                                    weiß es zu schätzen, mit großartigen Kunden zusammenzuarbeiten.
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="row">
                    <div className="container">
                        <div className="image-area">
                            <div className="image-wrapper">
                                <div className="image-container">
                                    <img className="image fit" alt="Grinder" src={Grinder} />
                                </div>
                            </div>
                        </div>

                        <div className="content-area">
                            <div className="text">
                                <h3>Meine Motivation</h3>
                                <p>
                                    Meine Arbeit ist meine Leidenschaft und ein positiver Antrieb für jeden Tag. Sie
                                    bringt mich dazu, an jeder neuen Herausforderung zu wachsen und so neue Ziele zu
                                    erreichen.
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
};

/* eslint-enable jsx-a11y/anchor-is-valid */
