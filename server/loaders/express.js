const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(helmet());
    return app;
};