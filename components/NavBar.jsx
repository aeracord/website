import React, { useState } from "react";
import styles from "./navBar.module.scss";

const NavBar = () => {

    // Menu open
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.nav_bar}>

            <a href="/" className={styles.home_button}><img src="/assets/logo.svg" alt="Aeracord logo" /></a>

            <div className={styles.bar}>
                <a href="/docs" className={styles.nav_bar_button}>Docs</a>
                <a href="/guides" className={styles.nav_bar_button}>Guides</a>
                <a href="/github" className={styles.nav_bar_button} target="_blank">GitHub</a>
            </div>

            <div className={`${styles.menu_button} ${menuOpen && styles.open}`} onClick={() => setMenuOpen(!menuOpen)}>
                <div className={styles.dot_border} />
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
            </div>

            <div className={`${styles.menu} ${menuOpen && styles.open}`}>

                <div className={`${styles.menu_background} ${menuOpen && styles.open}`} />

                <div className={`${styles.menu_content} ${menuOpen && styles.open}`}>

                    <a href="/docs" className={styles.menu_menu_button}>
                        <img className={styles.button_icon} src="/assets/page.svg" alt="Page icon" />
                        <p className={styles.button_text}>Docs</p>
                    </a>
                    <a href="/guides" className={styles.menu_menu_button}>
                        <img className={styles.button_icon} src="/assets/book.svg" alt="Book icon" />
                        <p className={styles.button_text}>Guides</p>
                    </a>

                    <a href="/github" className={styles.github_icon} target="_blank"><img src="/assets/github.svg" alt="GitHub logo" /></a>

                </div>

            </div>

        </div>
    );
};

export default NavBar;