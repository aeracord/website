const nextSASS = require("@zeit/next-sass");

module.exports = nextSASS({
    webpack: config => {

        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: "empty"
        };

        return config;
    },
    devIndicators: {
        autoPrerender: false
    }
});