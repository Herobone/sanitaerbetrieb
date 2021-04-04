/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classNames from "classnames";

import mainStyle from "../assets/sass/main.module.scss";

import footerStyle from "../assets/sass/layout/footer.module.scss";
import { Social } from "./Social";

export const Footer = (): JSX.Element => {
    return (
        <footer id={footerStyle.footer}>
            <section>
                <form method="post" action="#">
                    <div className={mainStyle.fields}>
                        <div className={mainStyle.field}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className={mainStyle.field}>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className={mainStyle.field}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows={3} />
                        </div>
                    </div>
                    <ul className={mainStyle.actions}>
                        <li>
                            <input type="submit" value="Send Message" />
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
                    <h3>Address</h3>
                    <p>
                        1234 Somewhere Road #87257
                        <br />
                        Nashville, TN 00000-0000
                    </p>
                </section>
                <section>
                    <h3>Phone</h3>
                    <p>
                        <a href="#">(000) 000-0000</a>
                    </p>
                </section>
                <section>
                    <h3>Email</h3>
                    <p>
                        <a href="#">info@untitled.tld</a>
                    </p>
                </section>
                <section>
                    <h3>Social</h3>
                    <Social />
                </section>
            </section>
        </footer>
    );
};

/* eslint-enable jsx-a11y/anchor-is-valid */
