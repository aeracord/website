import React from "react";
import { Guides } from "@apixelvisuals/typedoc-frontend";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import "./guides.scss";

const GuidesPage = () => (
    <div id="guides">

        <Head
            title="Guides - Aeracord"
            description="Aeracord, a lightweight library for the Discord API with flexible caching"
        />
        <NavBar />

        <Guides
            icon="/assets/page.svg"
            sections={[
                {
                    name: "Basics",
                    className: "basics",
                    guides: [
                        {
                            name: "Data Models",
                            description: "Learn about the two ways Aeracord provides data: simple objects and object-oriented classes",
                            icon: "/assets/guides/braces.svg",
                            slug: "data-models",
                            url: "https://raw.githubusercontent.com/APixelVisuals/aeracord/master/guides/data-models.md",
                            className: "main-small"
                        },
                        {
                            name: "Getting Started",
                            description: "The basics you need to know to start using Aeracord",
                            icon: "/assets/guides/star.svg",
                            slug: "getting-started",
                            url: "https://raw.githubusercontent.com/APixelVisuals/aeracord/master/guides/getting-started.md",
                            className: "main"
                        },
                        {
                            name: "Interactions",
                            description: "Learn about managing and responding to your bot's slash commands",
                            icon: "/assets/guides/slash.svg",
                            slug: "interactions",
                            url: "https://raw.githubusercontent.com/APixelVisuals/aeracord/master/guides/interactions.md",
                            className: "main-small"
                        },
                        {
                            name: "Permissions",
                            description: "Learn how to use utility methods to check a member's permissions",
                            icon: "/assets/guides/checkmark.svg",
                            slug: "permissions",
                            url: "https://raw.githubusercontent.com/APixelVisuals/aeracord/master/guides/permissions.md",
                            className: "thin"
                        },
                        {
                            name: "Audit Logs",
                            description: "Fetch and filter a guild's audit logs",
                            icon: "/assets/guides/file.svg",
                            slug: "audit-logs",
                            url: "https://raw.githubusercontent.com/APixelVisuals/aeracord/master/guides/audit-logs.md",
                            className: "thin"
                        }
                    ]
                },
                {
                    name: "Caching",
                    className: "caching",
                    guides: [
                        {
                            name: "Caching",
                            description: "Learn about the basics of how to control what the client caches",
                            icon: "/assets/guides/drive.svg",
                            slug: "caching",
                            url: "https://raw.githubusercontent.com/APixelVisuals/aeracord/master/guides/caching.md",
                            className: "main"
                        },
                        {
                            name: "Advanced Caching",
                            description: "Learn about how you can create custom caches of data (coming soon)",
                            icon: "/assets/guides/brackets.svg",
                            slug: "advanced-caching",
                            url: "https://raw.githubusercontent.com/APixelVisuals/aeracord/master/guides/advanced-caching.md",
                            className: "main"
                        }
                    ]
                },
                {
                    name: "Contributing",
                    className: "contributing",
                    guides: [
                        {
                            name: "Best Practices",
                            description: "Get familiar with Aeracord's best practices and code styling",
                            icon: "/assets/guides/thumbs-up.svg",
                            slug: "best-practices",
                            url: "https://raw.githubusercontent.com/APixelVisuals/aeracord/master/guides/best-practices.md",
                            className: "main-small"
                        },
                        {
                            name: "Contributing",
                            description: "Learn how you can contribute to Aeracord's development",
                            icon: "/assets/guides/heart.svg",
                            slug: "contributing",
                            url: "https://raw.githubusercontent.com/APixelVisuals/aeracord/master/guides/contributing.md",
                            className: "main"
                        },
                        {
                            name: "Exporting Modules",
                            description: "Learn how Aeracord handles exporting modules",
                            icon: "/assets/guides/export.svg",
                            slug: "exporting-modules",
                            url: "https://raw.githubusercontent.com/APixelVisuals/aeracord/master/guides/exporting-modules.md",
                            className: "main-small"
                        }
                    ]
                }
            ]}
            colors={{
                background: "#38639d",
                backgroundDark: "#142237",
                primary: "#076aff",
                accent: "#e9ba42",
                text: "#215cf2",
                textLight: "#5d84e4",
                textLighter: "#7295eb",
                codeblockBackground: "#4979c045"
            }}
        />

    </div>
);

export default GuidesPage;