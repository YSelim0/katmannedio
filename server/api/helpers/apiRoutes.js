const config = require("./../../config/index");

class ApiRoutes {
    static baseURL = `http://localhost:${config.port}`;
}

module.exports = ApiRoutes;
