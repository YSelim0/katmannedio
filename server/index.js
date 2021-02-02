const app = require("express")();
const http = require("http").createServer(app);
const config = require("./config/index");
const loaders = require("./loaders/index");

loaders({ expressApp: app });

app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello world"
    });
});

http.listen(config.port);
