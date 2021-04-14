import React from "react";
import { Docs } from "@apixelvisuals/typedoc-frontend";
import Head from "../components/Head";
import NavBar from "../components/NavBar";

const DocsPage = () => (
    <div id="docs">

        <Head
            title="Docs - Aeracord"
            description="Aeracord, a lightweight library for the Discord API with flexible caching"
        />
        <NavBar />

        <Docs
            url="https://raw.githubusercontent.com/APixelVisuals/aeracord/master/docs/docs.json"
            colors={{
                background: "#38639d",
                backgroundDark: "#142237",
                primary: "#076aff",
                accent: "#e9ba42",
                text: "#215cf2",
                textLight: "#5d84e4",
                textLighter: "#7295eb"
            }}
        />

    </div>
);

export default DocsPage;