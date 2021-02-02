const express = require("./express");
const expressLoader = require("./express");

module.exports = ({ expressApp }) => {
    expressLoader(expressApp);
}