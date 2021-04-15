import React from "react";
import { Codeblock } from "@apixelvisuals/typedoc-frontend";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import HorizontalComponent from "../components/HorizontalComponent";
import "./index.scss";

const Index = () => (
    <div id="index">

        <Head
            title="Aeracord"
            description="Aeracord, a lightweight library for the Discord API with flexible caching"
        />
        <NavBar />

        <div className="intro-wrapper">
            <HorizontalComponent
                left={(
                    <div className="intro">

                        <p className="title">Aeracord</p>

                        <p className="description">Aeracord is a lightweight library for the Discord API with flexible caching.</p>

                        <div className="buttons">

                            <button className="button" onClick={() => window.scrollTo({
                                top: document.querySelector(".features").getBoundingClientRect().top + window.pageYOffset,
                                behavior: "smooth"
                            })}>Features</button>
                            <a href="/docs" className="main-button">Documentation</a>
                            <a href="/github" className="button" target="_blank">GitHub</a>

                        </div>

                    </div>
                )}
                right={(
                    <Codeblock
                        path="src/index.js"
                        width="85%"
                        height="60vh"
                        content={`import { ACTIVITY_TYPE_PLAYING, Client, INTERACTION_RESPONSE_TYPE_MESSAGE } from "aeracord";\n\n// Create client\nconst client = new Client({\n    token: process.env.TOKEN,\n    presence: {\n        activities: [{\n            name: "say /help",\n            type: ACTIVITY_TYPE_PLAYING\n        }]\n    },\n    membersIntent: true\n});\n\nclient.on("ready", () => {\n\n    // Log\n    console.log("Bot online");\n});\n\nclient.on("interactionCreate", (data, { interaction }) => {\n\n    // Ping\n    if (interaction.data.name === "ping") {\n\n        // Respond\n        interaction.respond({\n            type: INTERACTION_RESPONSE_TYPE_MESSAGE,\n            data: {\n                content: "Pong!"\n            }\n        });\n    }\n});`}
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
                )}
            />
        </div>

        <div className="features">

            <div className="feature-wrapper">
                <HorizontalComponent
                    left={(
                        <div className="feature">

                            <p className="title">Flexible Caching</p>

                            <p className="description">Aeracord aims to be flexible with what gets cached. Control not only what gets cached, but also how long objects stay cached, and when they should automatically be cached.</p>

                            <div className="learn-more">
                                <p className="text">Learn more</p>
                                <a href="/guides/caching" className="button">Caching Objects</a>
                            </div>

                        </div>
                    )}
                    right={(
                        <img src="/assets/flexible-caching.svg" alt="Flexible caching" className="image" />
                    )}
                />
            </div>

            <div className="feature-wrapper">
                <HorizontalComponent
                    left={(
                        <div className="feature">

                            <p className="title">Object Oriented</p>

                            <p className="description">Aeracord has object-oriented classes to allow for making simple and logical calls to the Discord API. However, lower-level methods are also available, making Aeracord flexible based on what data is available.</p>

                            <div className="learn-more">
                                <p className="text">Learn more</p>
                                <a href="/docs" className="button">Documentation</a>
                            </div>

                        </div>
                    )}
                    right={(
                        <img src="/assets/object-oriented.svg" alt="Object oriented" className="image" />
                    )}
                    reflected={true}
                />
            </div>

            <div className="feature-wrapper">
                <HorizontalComponent
                    left={(
                        <div className="feature">

                            <p className="title">Interactions</p>

                            <p className="description">Aeracord has support for interactions, AKA slash commands. You can manage your bot's slash commands as well as respond to them with the <a href="/docs/classes/Client#interactionCreate"><code>interactionCreate</code></a> event.</p>

                            <div className="learn-more">
                                <p className="text">Learn more</p>
                                <a href="/guides/interactions" className="button">Interactions</a>
                            </div>

                        </div>
                    )}
                    right={(
                        <img src="/assets/interactions.svg" alt="Interactions" className="image" />
                    )}
                />
            </div>

        </div>

        <img src="/assets/wave.svg" className="wave" />
        <div className="bottom-links">
            <a href="/docs" className="button">Documentation</a>
            <a href="/github" className="link" target="_blank">GitHub</a>
        </div>

    </div>
);

export default Index;