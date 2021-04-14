import React, { useState } from "react";
import "./navBar.scss";

const NavBar = () => {

    // Menu open
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div id="nav-bar">

            <a href="/" className="home-button"><img src="/assets/logo.svg" alt="Aeracord logo" /></a>

            <div className="bar">
                <a href="/docs" className="nav-bar-button">Docs</a>
                <a href="/guides" className="nav-bar-button">Guides</a>
                <a href="/github" className="nav-bar-button" target="_blank">GitHub</a>
            </div>

            <div className={`menu-button ${menuOpen && "open"}`} onClick={() => setMenuOpen(!menuOpen)}>
                <div className="dot-border" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </div>

            <div className={`menu ${menuOpen && "open"}`}>

                <div className={`menu-background ${menuOpen && "open"}`} />

                <div className={`menu-content ${menuOpen && "open"}`}>

                    <a href="/docs" className="menu-menu-button">
                        <img className="button-icon" src="/assets/page.svg" alt="Page icon" />
                        <p className="button-text">Docs</p>
                    </a>
                    <a href="/guides" className="menu-menu-button">
                        <img className="button-icon" src="/assets/book.svg" alt="Book icon" />
                        <p className="button-text">Guides</p>
                    </a>

                    <a href="/github" className="github-icon" target="_blank"><img src="/assets/github.svg" alt="GitHub logo" /></a>

                </div>

            </div>

        </div>
    );
};

export default NavBar;