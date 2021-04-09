import React from "react";
import classNames from "classnames";

import mainStyle from "../assets/sass/main.module.scss";

import footerStyle from "../assets/sass/layout/footer.module.scss";
import { Social } from "./Social";

export const Footer = (): JSX.Element => {
    return (
        <>
            <footer id={footerStyle.footer}>
                <section>
                    <form method="post" action="#">
                        <div className={mainStyle.fields}>
                            <div className={mainStyle.field}>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className={mainStyle.field}>
                                <label htmlFor="email">E-Mail</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className={mainStyle.field}>
                                <label htmlFor="message">Nachricht</label>
                                <textarea name="message" id="message" rows={3} />
                            </div>
                        </div>
                        <ul className={mainStyle.actions}>
                            <li>
                                <input type="submit" value="Senden" />
                            </li>
                        </ul>
                    </form>
                </section>
                <section
                    className={classNames({
                        [mainStyle.split]: true,
                        [mainStyle.contact]: true,
                    })}
                >
                    <section className={mainStyle.alt}>
                        <h3 style={{ fontSize: "2em" }}>Matthias Junge</h3>
                    </section>
                    <section>
                        <h3>Telefon</h3>
                        <p>
                            <a href="tel:+4917632839935">0176-32839935</a>
                        </p>
                    </section>
                    <section>
                        <h3>E-Mail</h3>
                        <p>
                            <a href="mailto:info@sanitaerbetrieb.com">info@sanitaerbetrieb.com</a>
                        </p>
                    </section>
                    <section>
                        <h3>Sozial</h3>
                        <Social />
                    </section>
                </section>
            </footer>
            <div id={footerStyle.footerLinks}>
                <ul>
                    <li>
                        <a href="/datenschutz.html">Datenschutzerklärung</a>
                    </li>
                    <li>
                        <a href="/impressum.html">Impressum</a>
                    </li>
                    <li>
                        <a href="https://github.com/Herobone/sanitaerbetrieb">Quellcode</a>
                    </li>
                </ul>
            </div>
        </>
    );
};
