(async () => {

    //Modules
    const dotenv = require("dotenv");
    const fs = require("fs");
    const { createServer } = require("https");
    const parseURL = require("url").parse;
    const next = require("next");

    // Configure env variables
    dotenv.config();

    // Create app
    const app = next({ dev: process.env.DEV === "true" });
    const handler = app.getRequestHandler();

    // Prepare
    await app.prepare();

    // Create server
    createServer(
        { key: fs.readFileSync(process.env.SSL_KEY), cert: fs.readFileSync(process.env.SSL_CERT) },
        (req, res) => {

            // Parse URL
            const url = parseURL(req.url, true);

            // Docs
            if (/docs\/(.*)/.test(url.pathname)) return app.render(req, res, "/docs", url.query);

            // Guides
            if (/^\/guides\/(.*)/.test(url.pathname)) return app.render(req, res, "/guides", url.query);

            // Handle reqest
            handler(req, res, url);
        }
    ).listen(process.env.PORT);
})();