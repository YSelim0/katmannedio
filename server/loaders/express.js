const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(helmet());

    if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, "../public")));
    }
    return app;
};
